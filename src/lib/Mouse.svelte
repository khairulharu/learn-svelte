<script>
     const mouse = $state({
          x: 0,
          y: 0,
     })

     function handleMouseMove(event) {
          mouse.x = event.clientX
          mouse.y = event.clientY
     }
</script>

<svelte:body onmousemove={handleMouseMove}/>

<h1>Mouse x: {mouse.x}</h1>
<h1>Mouse y: {mouse.y}</h1>