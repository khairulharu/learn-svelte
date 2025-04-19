<script>
     import Something from "./Something.svelte"

     console.info("Hello svelte")
     const name = "Khairul Aswad"
     const sayName = () => {
          return "Khairul Aswad"
     }

     const content = '<p>Halo ini tag elment dengan text</p>'
</script>

<section class="mx-auto max-w-2xl bg-amber-90 font-mono text-4xl">
     <div class="bg-amber-300">
          <h1 class="text-red-500">Hello {sayName().toUpperCase()}== is a same with {name.toUpperCase()}!</h1>
     </div>
     <Something/>
     <Something/>
     <Something/>
     <Something/>

     <!-- //kalau pakai ini dirender as text -->
     {@html content}
     <!-- //kalau ini as expression of an element -->
     {content}
</section>

 
  