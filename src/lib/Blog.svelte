<script>
  import { onMount } from "svelte";
  import Layout from "./Layout.svelte";

  const blog = {
     title: "",
     description: ""
  }

  let blogs = $state([blog])

  onMount(async () => {
     const response = await fetch("/blog.json")
     blogs = await response.json()
  })
</script>

{#each blogs as blog, i (i)}
     <Layout title={blog.title} footer="Bad result is not mean youre failed">
          {#snippet content()}
               {blog.description}
          {/snippet}
     </Layout>
{/each}