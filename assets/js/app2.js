let cl=console.log;

const Tableinfo=document.getElementById('Tableinfo');
let dataUrl = 'https://jsonplaceholder.typicode.com/posts';

let xhreq = new XMLHttpRequest();

xhreq.open('GET',dataUrl,true)

xhreq.onload=function(){
   cl(xhreq.response) 
   let arrData=JSON.parse(xhreq.response)
   dataDisplay(arrData);
}

xhreq.send();

function dataDisplay(array){
    let result ='';
    array.forEach(ele=>{
        result+=`
        <tr>
        <td>${ele.id}</td>
        <td>${ele.userId}</td>
        <td>${ele.title}</td>
        <td>${ele.body}</td>
    </tr> 
        `
    })
    Tableinfo.innerHTML=result;
}


