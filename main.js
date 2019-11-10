let data=[];
let tap=document.getElementById("data");
let id=document.getElementById("id");
page=1;
function get(){
fetch('http://localhost:4000/students/' +id.value, {
            method: 'GET',
        })
        .then(Response => Response.json())
        .then(result => {
         let i=result.length;
         data=result;
         for(let s=0;s<i;s++){
          tap.innerHTML+=`<tr>
          <td class="td">${data[s].id}</td>
          <td class="td">${data[s].first_name}</td>
          <td class="td">${data[s].last_name}</td>
          <td class="td">${data[s].grade}</td>
          </tr>`;
         }
         console.log(result)
        });
        id.value = "";
        tap.innerHTML = "";
      }