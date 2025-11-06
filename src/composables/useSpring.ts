// useSpring.ts
import { ref, watch, type Ref } from 'vue'

interface SpringOptions {
  stiffness?: number
  damping?: number
  precision?: number
}

export function useSpring(source: Ref<number>, options: SpringOptions = {}) {
  const value = ref(source.value)
  const stiffness = options.stiffness ?? 0.1
  const damping = options.damping ?? 0.8
  const precision = options.precision ?? 0.001

  let velocity = 0
  let animationFrameId: number | null = null

  function animate() {
    // @see https://en.wikipedia.org/wiki/Hooke%27s_law
    const force = (source.value - value.value) * stiffness

    // @see https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator
    velocity = velocity * damping + force

    value.value += velocity

    const atRest =
      Math.abs(source.value - value.value) < precision && Math.abs(velocity) < precision

    if (!atRest) {
      animationFrameId = requestAnimationFrame(animate)
    } else {
      value.value = source.value
      velocity = 0
      animationFrameId = null
    }
  }

  watch(source, () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
    animationFrameId = requestAnimationFrame(animate)
  })

  return value
}
