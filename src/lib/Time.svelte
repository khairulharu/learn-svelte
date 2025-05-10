<script>
     const time = (node, interval) => {
          const text = node.textContent

          $effect(() => {
               const id = setInterval(() => {
                    node.textContent = text + ' ' + new Date().getTime()
               }, interval)

               return () => clearInterval(id)
          })
     }
</script>

<h1 use:time={1000}>Title</h1>
<p use:time={5000}>Hello World</p>