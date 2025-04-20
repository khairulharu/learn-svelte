<script>
     import Todo from "./Todo.svelte";

     const data = [
          {
               id : "1",
               text : "doing something",
               done : true
          },
          {
               id : "2",
               text : "doing something",
               done : false
          },
          {
               id : "3",
               text : "doing something",
               done : false
          },
          {
               id : "3",
               text : "doing something",
               done : true
          }
     ]
</script>

<ul>
     {#each data as todo }
          <li><Todo {...todo}/></li>
     {/each}
</ul>