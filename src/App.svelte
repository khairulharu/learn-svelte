<script>
  let count = $state(0);

  function onClick() {
    count ++
  }
</script>

<h1>{ count }</h1>
<button onclick={onClick}>increment</button>

