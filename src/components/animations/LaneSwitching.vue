<script setup lang="ts">
import { ref } from 'vue'
import { useTween } from '@/composables/useTween.ts'
import { useSpring } from '@/composables/useSpring.ts'

const props = defineProps<{
  laneHeight: number
  numberLanes: number
}>()

const LANE_MINIMUM_HEIGHT = 40
const LANE_MAXIMUM_HEIGHT = props.laneHeight

const LANE_INITIAL_ANGLE = 45
const LANE_END_ANGLE = 145

const laneAngleTarget = ref(LANE_INITIAL_ANGLE)
const laneAngle = useTween(laneAngleTarget)

const laneHeightTarget = ref(LANE_MAXIMUM_HEIGHT)
const currentLaneHeight = useSpring(laneHeightTarget, { stiffness: 0.05, damping: 0.8 })

function onClick() {
  if (laneAngleTarget.value === LANE_END_ANGLE) {
    laneAngleTarget.value = LANE_INITIAL_ANGLE

    laneHeightTarget.value = LANE_MINIMUM_HEIGHT
    setTimeout(() => (laneHeightTarget.value = LANE_MAXIMUM_HEIGHT), 100)

    return
  }

  laneAngleTarget.value = LANE_END_ANGLE

  laneHeightTarget.value = LANE_MINIMUM_HEIGHT
  setTimeout(() => (laneHeightTarget.value = LANE_MAXIMUM_HEIGHT), 100)
}
</script>

<template>
  <div class="flex gap-4" @click="onClick">
    <div
      :key="i"
      v-for="i in numberLanes"
      style="background-color: var(--bg-color, white); width: 4px"
      :style="{
        transform: `rotate(${laneAngle}deg)`,
        height: `${currentLaneHeight}px`,
      }"
    />
  </div>
</template>
