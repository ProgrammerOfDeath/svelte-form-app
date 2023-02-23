<script lang="ts">
export let stepTitle: string = ''
export let stepContent: string = ''
export let stepNumber: number = 0
</script>

<li class="flex items-center mb-4">
  <div class="rounded-full bg-primary-light-blue w-7 h-7 grid place-content-center mr-2">
    {stepNumber}
  </div>
  <div class="uppercase">
    <p class="text-xs text-neutral-cool-gray">{stepTitle}</p>
    <p class="text-sm font-medium text-neutral-white">{stepContent}</p>
  </div>
</li>
