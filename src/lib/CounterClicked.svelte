<script>
     let count = $state([])
     // let total = $derived(count.reduce((a, b) => a + b, 0))
     let total = $derived.by(() => {
          let total = 0
          for (let i = 0; i < count.length; i++) {
               total += count[i]
          }

          return total
     })

     function increment() {
          count.push(1)
     }

     $inspect(count).with((type, values) => {
          console.log(type, values)
     })

</script>

<h1 class={ total % 2 === 0 ? 'red' : 'blue'}>{count.join(" + ")} = {total}</h1>

<button onclick={increment}>increment</button>

<style>
     .red {
          color: red;
     }
     .blue {
          color: blue;
     }
</style>