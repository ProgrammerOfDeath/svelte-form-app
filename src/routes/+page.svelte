<script>
import { currentStepTitle } from '../stores/stepStore'
import Form from '../components/Form.svelte'
</script>

<svelte:head>
  <title>
    {$currentStepTitle}
  </title>
</svelte:head>

<main class="grid place-content-center h-screen">
  <section>
    <Form />
  </section>
</main>
