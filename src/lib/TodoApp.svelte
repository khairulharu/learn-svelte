<script>
     import Todo from "./Todo.svelte"

     const data = $state([
          {
               id : "1",
               text : "A",
               done : true
          },
          {
               id : "2",
               text : "B",
               done : false
          },
          {
               id : "3",
               text : "C",
               done : false
          },
          {
               id : "4",
               text : "D",
               done : true
          }
     ])

     function remove() {
          data.shift()
     }

</script>

<button onclick={remove}>Remove</button>

<ul>
     {#each data as todo (todo.id)}
          <li><Todo {...todo}/></li>
     {/each}
</ul>