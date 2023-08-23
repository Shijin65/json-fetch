
let namel='';

fetch('user.json').then(Response => Response.json()).then(JSON => {
            console.log(JSON.user)
            JSON.user.forEach(user => {
                namel +=`<p> ${user.name} - ${user.age}</p>  `
                console.log(user.name)
            }); 

            
           document.querySelector('.todo').innerHTML=namel;
           


        });
       