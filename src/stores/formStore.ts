import { writable } from 'svelte/store'
import type { FormData } from '../types/FormData'

const formData = writable<FormData>({
  personalData: {
    name: '',
    phone: '',
    email: '',
  },
})

export { formData }
