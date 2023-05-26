fetch('https://jsonplaceholder.typicode.com/users')
.then(Response => Response.json())

.then(json => {
    
    json.forEach(element => {
        console.log(`Nome: ${element.username.toLowerCase()} - Sobrenome: ${element.name.toUpperCase()}`);
    });
    json.filter(element => element.id % 2 === 0).forEach(item => console.log(`${item.id}`))
    })