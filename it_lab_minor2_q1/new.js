async function showQuote()
{
    await fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
        console.json(data);
    });

}