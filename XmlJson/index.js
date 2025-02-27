const arr = [
    {id: 1, name: 'Alice', age: 29},
    {id: 2, name: 'Bobby Hadz', age: 30},
    {id: 3, name: 'Carl', age: 31},
    ];
    const preElement = document.getElementById('json-data');
    preElement.style.fontSize = '18px';preElement.innerHTML =
    JSON.stringify(arr, null, 2);