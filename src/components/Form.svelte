<script>
import PersonalInfo from './Forms/PersonalInfo.svelte'
import Stepper from './Stepper.svelte'
</script>

<div class="bg-white rounded-lg shadow-lg p-4 grid grid-flow-col">
  <div class="">
    <Stepper />
  </div>
  <div class=" pt-10 pb-4 pl-20 pr-4">
    <PersonalInfo />
  </div>
</div>
