

<script>
    let {data} = $props();
    console.log(data);
</script>


<div class="body">


<div class="content">

<h1>Singe Countries</h1>

<ul>

    <li>Countrie Name : {data.content[0].name.common}</li>
    <li>Capital City : {data.content[0].capital}</li>
    <li>Flag : {data.content[0].flag}</li>

</ul>

</div>

</div>

<style>

    .body{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

    }
    .content{
        height: 50%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 200px;
        background-color: lightgray;
    }
</style>
