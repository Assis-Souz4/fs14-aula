fetch('https://jsonplaceholder.typicode.com/posts')
.then(Response => Response.json())
.then(json => {
    
    json.forEach(element => {
        console.log(`title ${element.title}`);
        if(element.userId === 10){
            console.log(`title = 10  ${element.title}`);
        }
    });
    })