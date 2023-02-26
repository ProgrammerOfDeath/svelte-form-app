<script>
import BaseInput from '../Base/BaseInput.svelte'
import FormDescription from '../FormElements/FormDescription.svelte'
import FormTitle from '../FormElements/FormTitle.svelte'
import { formData } from '../../stores/formStore'
</script>

<div>
  <FormTitle title="Personal info" />
  <FormDescription description="Please provide vour name, email address, and phone number." />
  <form>
    <BaseInput
      id="personal-info"
      name="personal-info"
      bind:value={$formData.personalData.name}
      label="Name"
      placeholder="e.g Stephen King"
    />
    <BaseInput
      id="email"
      name="email"
      bind:value={$formData.personalData.email}
      label="Email Adress"
      placeholder="e.g. stephenking@lorem.com"
    />
    <BaseInput
      id="phone"
      name="phone"
      bind:value={$formData.personalData.phone}
      label="Phone number"
      placeholder="e.q. +1 234 567 890"
    />
  </form>
</div>
