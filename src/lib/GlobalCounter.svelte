<script>
  import { counter } from "../state/counter.svelte";

     function increment() {
          counter.count++
     }

     $inspect(counter).with((type, values) => {
          console.info(type, values)
     })
</script>

<button onclick={increment}>Increment : {counter.count}</button>