<script lang="ts">
export let id = ''
export let name = ''
export let value = ''
export let label = ''
export let placeholder = ''
</script>

<fieldset class="mb-5 last:mb-0">
  <label class="text-sm text-primary-marine" for={id}>{label}</label>
  <input
    class="border border-neutral-light-gray text-neutral-cool-gray font-medium p-3 rounded-lg block w-full "
    {id}
    {name}
    {placeholder}
    bind:value
  />
</fieldset>
