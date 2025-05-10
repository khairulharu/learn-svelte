<script>
  import { fade, fly, slide } from "svelte/transition";
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
          <li in:fly={{ y:-200, duration:2000 }} out:fly={{ y:200, duration:2000 }}
               onintrostart={() => console.log("on intro start")}
               onoutrostart={() => console.log("on outro start")}
               onintroend={() => console.log("on intro end")}
               onoutroend={() => console.log("on outro end")}>
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

<style>
     :global {
          button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 10px 20px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
          margin: 4px 2px;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s ease;
     }

     button:hover {
          background-color: #45a849;
     }
}
</style>