



export async function load (){

    let response = await fetch('https://restcountries.com/v3.1/all?fields=name')
    let content = await response.json();    


return {
    content
}

}
