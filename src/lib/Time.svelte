<script>
     const time = (node) => {
          const text = node.textContent

          $effect(() => {
               const id = setInterval(() => {
                    node.textContent = text + ' ' + new Date().toLocaleString()
               }, 1000)

               return () => clearInterval(id)
          })
     }
</script>

<h1 use:time>Title</h1>

<p use:time>Hello World</p>