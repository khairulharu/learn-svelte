<script>
  import { SvelteMap } from "svelte/reactivity";

     const students = new SvelteMap()

     let student = $state("")
     let value = $state(0)

     function addStudent() {
          students.set(student, value)

          student = ""
          value = 0
     }
</script>

<div>
     Student : <input type="text" bind:value={student}>
     <br>
     value : <input type="number" bind:value={value}>
     <br>
     <button onclick={addStudent}>Add Student</button>
</div>


<div>
     <table>
          <thead>
               <tr>
                    <th>Student</th>
                    <th>Value</th>
               </tr>
          </thead>
          <tbody>
               {#each students as student (student[0]) }
                    <tr>
                         <td>{student[0]}</td>
                         <td>{student[1]}</td>
                    </tr>
               {/each}
          </tbody>
     </table>
</div>