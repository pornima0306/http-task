/* 1 Create a object by using XMLHTTPRequest */

/* 
function getJob(){
    let job = Math.random();
    if(job > .5){
        resolve()
    }else{
        reject()
    }
}
*/

let cl = console.log;

/* fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => cl(data))
.catch(json => cl(json)) */


/*Methods
 GET >> GET DATA
 POST >> SAVE DATA IN DATABASE
 PATCH >> PARTIALLY UPDATE DATA
 PUT >> ALL OBJECT WE HAVE TO CHANGE 
 DELETE >> for removing data 
 
 xmlHTTPRequest()
 It is a constructor  method
 constructor method >> it is a blueprint for creating objects
 */

 
let apiurl ='https://jsonplaceholder.typicode.com/todos';
const info = document.getElementById('info');


//1 create instance/object of XMLHttprequest()
let xhr = new XMLHttpRequest();

//2 Open method >> open method accepts 3 parameter >>open(method: string, url: string | URL)
xhr.open('GET',apiurl,true)   //true value is for the assyncronous value >> by default value is true

//3 onload
xhr.onload= function(){
    cl(xhr.response)
    let data = JSON.parse(xhr.response);
    templating(data)
};

//4 send
xhr.send();

function templating(arr){
    let result = '';
    arr.forEach(ele => {
            result+= `
                <tr>
                    <td>${ele.id}</td>
                    <td>${ele.userId}</td>
                    <td>${ele.title}</td>
                    <td>${ele.completed}</td>
                </tr>
            `  
        });
        info.innerHTML = result;
         }



/* ====================================================================== */


