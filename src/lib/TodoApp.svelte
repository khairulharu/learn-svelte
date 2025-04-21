<script>
  import EditTodo from "./EditTodo.svelte";
import Todo from "./Todo.svelte";


     let data = $state([])
     let name = $state("")

     let id = 0

     function add(e) {
          e.preventDefault()

          data.push({
               id: id++,
               name: name,
               edit: false,
               done: false
          })

          name = ""
     }

     function remove(id) {
          data = data.filter((item) => item.id !== id)
     }

     function onedit(id, name) {
          const idEdited = data.findIndex((item) => item.id === id)
          data[idEdited].name = name
          data[idEdited].edit = false
     }

     function edit(id) {
          const idEdited = data.findIndex((item) => item.id === id)
          data[idEdited].edit = true
     }
</script>

<form>
     <input type="text" bind:value={name}>
     <button onclick={add}>Add</button>
</form>

<ul>
     {#each data as todo (todo.id)}
          <li>
               {#if todo.edit}
               <EditTodo id={todo.id} name={todo.name} onedit={onedit}/>

               {:else}
               <Todo {...todo}/>
               <button onclick={() => edit(todo.id)}>Edit</button>
               <button onclick={() => remove(todo.id)}>Delete</button>
               {/if}
          </li>
     {/each}
</ul>