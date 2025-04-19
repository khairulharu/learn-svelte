<script>
  import GlobalCounter from "./lib/GlobalCounter.svelte";

  import { counter } from "./state/counter.svelte";

</script>

<h1>This is global state {counter.count}</h1>

<GlobalCounter/>
<GlobalCounter/>
<GlobalCounter/>
<GlobalCounter/>