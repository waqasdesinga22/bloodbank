
let b;
let u;
let url;
let m;
function profile()
{
    

    let user=0;
   
  let keylog=  JSON.parse(localStorage.getItem("key"));

if(user===0)
{


    

 firebase.database().ref('Acceptor/A+/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
      
   if(key==keylog)
{
    document.getElementById('loader').style.display='none';
    document.getElementById('reg').style.display='block';
     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
     document.getElementById('contact_profile').value=dd[key].contact;    
    m=dd[key].gender;
    b=dd[key].blood;
    u=dd[key].url;
    b=dd[key].user;
// obj.name  =dd[key].name
// obj.age=dd[key].age
// obj.address=dd[key].Address
// obj.contact=dd[key].contact


user=1;

break;
}

 }




 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}
else{

}
 

if(user===0)
{
    
 firebase.database().ref('Acceptor/A-/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
   if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;

user=1;
break;

}



 }
 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}

else{

}
if(user===0)
{

 firebase.database().ref('Acceptor/B+/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
   if(key===keylog)
{

    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



 }
 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}
else{

}
 if(user===0)
{

 firebase.database().ref('Acceptor/B-/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
   if(key===keylog)
{

    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



 }
 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}
else{

}

 if(user===0)
{

 firebase.database().ref('Acceptor/O+/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
   if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



 }
 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}
else{

}
 if(user===0)
{

 firebase.database().ref('Acceptor/O-/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
   if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



 }
 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}


else{  }  if(user===0)
{
    

 firebase.database().ref('Acceptor/AB+/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
   if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;

break;

}



 }
 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}

else{  }  if(user===0)
{
    

 firebase.database().ref('Acceptor/AB-/').once('value',(data1)=>
 {
     
 let dd=data1.val();
 
  for(let key in dd){
   if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



 }
 
 // let counter = 0;
 //         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
 })
 



}

// FOR DONOR

else{  }  if(user===0)
{



firebase.database().ref('Donor/A+/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){

if(key==keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}


else{  }  if(user===0)
{

firebase.database().ref('Donor/A-/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){
if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}


else{  }  if(user===0)
{

firebase.database().ref('Donor/B+/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){
if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}

else{  }  if(user===0)
{

firebase.database().ref('Donor/B-/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){
if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}


else{  }  if(user===0)
{

firebase.database().ref('Donor/O+/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){
if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}

else{  }  if(user===0)
{

firebase.database().ref('Donor/O-/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){
if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}


else{  }  if(user===0)
{

firebase.database().ref('Donor/AB+/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){
if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}

else{  }  if(user===0)
{

firebase.database().ref('Donor/AB-/').once('value',(data1)=>
{

let dd=data1.val();

for(let key in dd){
if(key===keylog)
{
    document.getElementById('loader').style.display='none';     document.getElementById('reg').style.display='block';     document.getElementById('name_profile').value=dd[key].name;
    document.getElementById('age_profile').value=dd[key].age;
    document.getElementById('address_profile').value=dd[key].Address;
      document.getElementById('contact_profile').value=dd[key].contact;     m=dd[key].gender;     b=dd[key].blood;     url=dd[key].url;     u=dd[key].user;
user=1;
break;

}



}

// let counter = 0;
//         ul.innerHTML = arr.map((v)=>`<li style="height: 50px;left:-10%;width:110%; background-color: transparent;border-color: bisque;" key="${arrkey[counter]}" class="list-group-item">${++counter} &nbsp <label> ${v.data}</label> &nbsp<div style="display: inline-block; float: right;"> <button onClick="edit(this)" class="btn btn-primary editcss"></button>&nbsp;<button onClick="d(this)" class="btn btn-danger deletcss" ></button></div></li>`).join("\n") 
})




}


user=0
}
profile()
function changes(){
    document.getElementById('loader').style.display='block';
    document.getElementById('reg').style.display='none';
    let ob={
        Address: document.getElementById('address_profile').value
,
age: 
document.getElementById('age_profile').value,
blood: 
b,
contact: 
document.getElementById('contact_profile').value,
gender: 
m,
name: 
document.getElementById('name_profile').value,
url: 
url,
user: 
u

    }
    firebase.database().ref(u+'/'+b+"/"+JSON.parse(localStorage.getItem("key"))+'/').set(ob).then((success)=>{
     
        swal({
            title: "SUCCESS!",
            text: "Data Updated Successfully",
            icon: "success",
            button: "OK!",
            closeOnClickOutside: false,
    closeOnEsc: false,
          })
  }).then(()=>{
    document.getElementById('loader').style.display='none';
    document.getElementById('reg').style.display='block';
  })
  
}