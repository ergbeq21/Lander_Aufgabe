




<script>
    let {data} = $props();
</script>

<div class="container">
<h1>Hier kann man alle Länder sehen</h1>

{#each data.content as item}
  <a href={`/countries/${item.name.common}`}>{item.name.common}</a>
 {/each}  
 
</div>


<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgb(149, 153, 152);
    }

    a{
        text-decoration: none;
        color: white;
        margin: 10px;
    }
    h1{
        color: aliceblue;
    }
</style>