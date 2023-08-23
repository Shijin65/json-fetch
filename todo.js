
let namel='';
let todo=''
fetch('https://jsonplaceholder.typicode.com/todos').then(Response => Response.json()).then(JSON => {
            console.log(JSON[1].title)
            JSON.forEach(todo => {
                namel +=`<p> ${todo.title}</p>  `
                console.log(todo.title)
            }); 


           document.querySelector('.todo').innerHTML=namel;
           


        });
       