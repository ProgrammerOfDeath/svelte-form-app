<script lang="ts">
import StepperItem from './StepperItem.svelte'
import { steps } from '../config/stepperConfig'
</script>

<div class="rounded-lg py-9 px-8 bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat">
  <ul class="list-none">
    {#each steps as step, i}
      <StepperItem stepTitle={step.title} stepContent={step.subTitle} stepNumber={i + 1} />
    {/each}
  </ul>
</div>
