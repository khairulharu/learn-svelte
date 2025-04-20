<script>
     const fetchArticle = async () => {
          let response = await fetch("/article.json")
          return await response.json()
     }
</script>

<div>
     {#await fetchArticle()}
          <p>Loading ...</p>
     {:then articles}
          <ul>
               {#each articles as article (article.id)}
                    <li>
                         <p>{article.id}</p>
                         <div>
                              <p>{article.title}</p>
                              <p>{article.tanggal}</p>
                         </div>
                    </li>
               {/each}
          </ul>
     {:catch error}
          <p> Error: {error.message}</p>
     {/await}
</div>