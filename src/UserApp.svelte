<script>
  import UserRow from "./lib/UserRow.svelte";


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
          <UserRow {...persons[0]}/>
          <UserRow {...persons[1]}/>
          <UserRow {...persons[2]}/>
     </tbody>
</table>