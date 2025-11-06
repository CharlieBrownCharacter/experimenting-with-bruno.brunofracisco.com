<script lang="ts" setup>
import { onMounted, ref, useTemplateRef } from 'vue'
import { useTween } from '@/composables/useTween.ts'
import { useSpring } from '@/composables/useSpring.ts'

interface Eye {
  ref: SVGPathElement | null
  center: { x: number; y: number }
}

const eyes: [Eye, Eye] = [
  { ref: null, center: { x: 0, y: 0 } },
  { ref: null, center: { x: 0, y: 0 } },
]

const eyeRadius = 1
const heartCenter = { x: 0, y: 0 }
const maximumScaleHeart = 1.5
const maxAngle = 5

const leftEyeRef = useTemplateRef<SVGPathElement>('leftEyeRef')
const rightEyeRef = useTemplateRef<SVGPathElement | null>('rightEyeRef')
const heartRef = useTemplateRef<SVGSVGElement | null>('heartRef')

const targetAngle = ref(0)
const heartAngle = useTween(targetAngle, 800)

const targetScale = defineModel('targetScale', { default: 1 })
const refScale = useSpring(targetScale, { stiffness: 0.1, damping: 0.9 })

const fillHeartScaleTarget = defineModel('fillHeartScaleTarget', { default: 0 })
const fillHeartScale = useSpring(fillHeartScaleTarget, { stiffness: 0.2, damping: 0.4 })

function onMove(e: MouseEvent) {
  eyes.forEach((eye) => {
    if (!eye.ref) return
    const dx = e.clientX - eye.center.x
    const dy = e.clientY - eye.center.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    const factor = distance > eyeRadius ? eyeRadius / distance : 1
    const moveX = dx * factor
    const moveY = dy * factor

    eye.ref.setAttribute('transform', `translate(${moveX}, ${moveY})`)
  })

  if (heartRef.value) {
    const dx = e.clientX - heartCenter.x

    if (dx > 50 || dx < -50) {
      targetAngle.value = 0
      return
    }

    if (dx < 15 && dx > -15) {
      targetAngle.value = 0
      return
    }

    targetAngle.value = dx < 0 ? -maxAngle : maxAngle
  }
}

function onHeartClick() {
  if (targetScale.value >= maximumScaleHeart) {
    targetScale.value = 1
    fillHeartScaleTarget.value = 0

    return
  }

  targetScale.value += 0.05
  fillHeartScaleTarget.value += 0.1
}

onMounted(() => {
  eyes[0].ref = leftEyeRef.value
  eyes[1].ref = rightEyeRef.value

  eyes.forEach((eye) => {
    if (!eye.ref) return

    const bbox = eye.ref.getBBox()
    const svg = eye.ref.ownerSVGElement

    if (!svg) throw new Error('svg should be defined')

    const svgRect = svg.getBoundingClientRect()

    eye.center.x = bbox.x + bbox.width / 2 + svgRect.left
    eye.center.y = bbox.y + bbox.height / 2 + svgRect.top
  })

  if (heartRef.value) {
    const bbox = heartRef.value.getBoundingClientRect()
    heartCenter.x = bbox.left + bbox.width / 2
    heartCenter.y = bbox.top + bbox.height / 2
  }

  window.addEventListener('mousemove', onMove)
})
</script>

<template>
  <svg
    class="select-none cursor-pointer"
    ref="heartRef"
    :style="`transform-origin: 50% 50%; transform: rotate(${heartAngle}deg) scale(${refScale});`"
    width="47"
    height="40"
    viewBox="0 0 47 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="onHeartClick"
  >
    <defs>
      <clipPath id="heartClip">
        <path
          d="M11.775 0.0244828C21.5187 0.0244828 23.0777 10.0983 23.0777 10.0983C23.0777 10.0983 24.6366 -0.576845 35.1599 0.0244828C41.6218 0.393742 45.8499 6.06882 46.0727 11.7102C46.8522 31.455 26.6686 39.84 23.0777 39.84C19.4868 39.84 -1.47636 31.0521 0.0826748 11.7102C0.537388 6.06882 5.0988 0.0244828 11.775 0.0244828Z"
        />
      </clipPath>

      <linearGradient id="heartGradient" x1="13.4515" y1="39.36" x2="39.3715" y2="-1.44">
        <stop stop-opacity="0.9" />
        <stop offset="1" stop-color="#020202" stop-opacity="0.4" />
      </linearGradient>
    </defs>

    <g clip-path="url(#heartClip)">
      <path
        d="M11.775 0.0244828C21.5187 0.0244828 23.0777 10.0983 23.0777 10.0983C23.0777 10.0983 24.6366 -0.576845 35.1599 0.0244828C41.6218 0.393742 45.8499 6.06882 46.0727 11.7102C46.8522 31.455 26.6686 39.84 23.0777 39.84C19.4868 39.84 -1.47636 31.0521 0.0826748 11.7102C0.537388 6.06882 5.0988 0.0244828 11.775 0.0244828Z"
        fill="url(#heartGradient)"
      />

      <path
        :style="`transform: scale(${fillHeartScale}); transform-origin: 50% 50%`"
        d="M11.775 0.0244828C21.5187 0.0244828 23.0777 10.0983 23.0777 10.0983C23.0777 10.0983 24.6366 -0.576845 35.1599 0.0244828C41.6218 0.393742 45.8499 6.06882 46.0727 11.7102C46.8522 31.455 26.6686 39.84 23.0777 39.84C19.4868 39.84 -1.47636 31.0521 0.0826748 11.7102C0.537388 6.06882 5.0988 0.0244828 11.775 0.0244828Z"
        fill="red"
      />

      <path
        ref="leftEyeRef"
        d="M13.4515 23.04C14.5119 23.04 15.3715 22.1804 15.3715 21.12C15.3715 20.0596 14.5119 19.2 13.4515 19.2C12.3911 19.2 11.5315 20.0596 11.5315 21.12C11.5315 22.1804 12.3911 23.04 13.4515 23.04Z"
        fill="black"
      />

      <path
        ref="rightEyeRef"
        d="M32.6515 23.04C33.7119 23.04 34.5715 22.1804 34.5715 21.12C34.5715 20.0596 33.7119 19.2 32.6515 19.2C31.5911 19.2 30.7315 20.0596 30.7315 21.12C30.7315 22.1804 31.5911 23.04 32.6515 23.04Z"
        fill="black"
      />

      <path
        d="M18.2515 28.8C21.4515 31.104 24.6515 31.104 27.8515 28.8"
        stroke="black"
        stroke-width="0.8"
        stroke-linecap="round"
      />
    </g>
  </svg>
</template>
