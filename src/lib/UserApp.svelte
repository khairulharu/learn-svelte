<script>
  import UserRow from "./UserRow.svelte";


     const persons = [
          {id:"1",name:"khairul", address:"st jan jerman bekasi"},
          {id:"2", name:"aswad", address:"st jan jerman bandung"},
          {id:"3", name:"still", address:"st jan jerman jatim hor"}
     ]
</script>

<table>
     <thead>
          <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Address</th>
          </tr>
     </thead>
     <tbody>
          {#each persons as person }
               <UserRow {...person}/>
          {/each}
     </tbody>
</table>