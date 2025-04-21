<script>
     let {id, name, onedit} = $props()

     function save() {
          onedit(id, name)
     }
</script>

{id} : <input type="text" id={id} bind:value={name}>
<button onclick={save}>Save</button>

<style>
     button {
          background-color: brown;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          margin: 4px 2px;
          cursor: progress;
          border-radius: 5px;
          transition: background-color 0.3s ease;
     }

     button:hover {
          background-color: blueviolet;
     }
</style>