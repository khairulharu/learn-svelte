<script>
     let {id, name, onedit} = $props()

     function save() {
          onedit(id, name)
     }
</script>

{id} : <input type="text" id={id} bind:value={name}>
<button onclick={save}>Save</button>