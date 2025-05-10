<script>
  import { fade } from "svelte/transition";

     let {id, name, done} = $props()

     $inspect(done).with((type, value) => console.info(type, value))
</script>

<input type="checkbox" bind:checked={done}> {id} - {name}