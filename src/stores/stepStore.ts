import { writable } from 'svelte/store'

const currentStepTitle = writable('First Step')

export { currentStepTitle }
