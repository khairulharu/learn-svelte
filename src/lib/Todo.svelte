<script>
     const {id, text, done} = $props()
</script>

{#if done}
     <strike>{id} - {text}</strike>
{:else}
     {id} - {text}
{/if}