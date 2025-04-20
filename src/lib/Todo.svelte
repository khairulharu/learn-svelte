<script>
     const {id, text, done} = $props()

     const chars = {
          "1" : "A",
          "2" : "B",
          "3" : "C",
          "4" : "D"
     }

     const char = chars[id]

     console.info(char)
</script>

{char}

{#if done}
     <strike>{id} - {text}</strike>
{:else}
     {id} - {text}
{/if}