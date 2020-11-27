let addtaskinput=document.getElementById("addtaskinput");
let addtaskbtn=document.getElementById("addtaskbtn");
addtaskbtn.addEventListener("click",function(){
    addtaskinputval=addtaskinput.value;
    let webtask=localStorage.getItem("localtask");
    if(webtask==null)
    {
        taskobj=[];
    }
    else{
        taskobj=JSON.parse(webtask);
    }
    taskobj.push(addtaskinputval);
localStorage.setItem("localtask",JSON.stringify(taskobj));
showtask();

})
function showtask(){
    let webtask=localStorage.getItem("localtask");
    if(webtask==null)
    {
        taskobj=[];
    }
    else{
        taskobj=JSON.parse(webtask);
    }
    let  html='';
    let addedtasklist=document.getElementById("addedtasklist");
    taskobj.forEach((item,index) => {
                  html += `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${item}</td>
                
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
        
        
    });
    addedtasklist.innerHTML=html;
}