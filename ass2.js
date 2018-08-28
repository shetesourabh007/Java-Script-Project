
var user=[];
var error='<p  id="error1"> please fill the username</p>';

if(localStorage.a_users)
{
user=JSON.parse(localStorage.a_users)
}
 



var a=document.getElementById("uname")
var b=document.getElementById("pass")
var c=document.getElementById("fname")
var d=document.getElementById("lname")
var e=document.getElementById("email")
var f=document.getElementsByName("Gender")
var g=document.getElementById("location")


var a1=1;
 var a2=1;var a3=1;var a4=1;var a5=1;var a6=1;var a7=1;


document.getElementById("save").addEventListener("click",function()

{
    
    if (a.value =="") 
    {
        

        if(document.getElementById("error1")==null)
        {
            a.insertAdjacentHTML("afterend",' <p style="color:red", id="error1"> please fill the uname</p>');  
        }
        
 }
 
                 else if(a.value !=""){  

        if(document.getElementById("error1")!=null){
            document.getElementById("error1").remove();
        }
    }

  

   if (b.value.length ==0) 
    {
        

        if(document.getElementById("error2")==null)
        {
            b.insertAdjacentHTML("afterend",' <p style="color:red", id="error2"> please fill the pass</p>');  
        }
        
 }

                 else if(b.value.length !=0){  

        if(document.getElementById("error2")!=null){
            document.getElementById("error2").remove();
        }
    }

       if (c.value.length ==0) 
    {
        if(document.getElementById("error3")==null)
        {
            c.insertAdjacentHTML("afterend",' <p style="color:red", id="error3"> please fill the firstName</p>');  
        }
        
 }
 
                 else if(c.value.length !=0){  

        if(document.getElementById("error3")!=null){
            document.getElementById("error3").remove();
        }
    }
      if (d.value.length==0) 
    {
        if(document.getElementById("error4")==null)
        {
            d.insertAdjacentHTML("afterend",' <p style="color:red", id="error4"> please fill the lastName</p>');  
        }
        
 }
 
                 else if(d.value.length !=0){  

        if(document.getElementById("error4")!=null){
            document.getElementById("error4").remove();
        }
    }



       if (e.value.length==0) 
    {
        if(document.getElementById("error5")==null)
        {
            e.insertAdjacentHTML("afterend",' <p style="color:red", id="error5"> please fill the email</p>');  
        }
        
 }
 
                 else if(e.value.length !=0){  

        if(document.getElementById("error5")!=null){
            document.getElementById("error5").remove();
        }
    }

 
if(f[0].checked==false && f[1].checked==false )
{

    if(document.getElementById("error6")==null)
        {
            g.insertAdjacentHTML("beforeBegin",' <p style="color:red", id="error6"> please fill the gender</p>');  
        }
        
 }
 
                 else if(f[0].checked==true || f[1].checked==true ){  

        if(document.getElementById("error6")!=null){
            document.getElementById("error6").remove();
        }
    }






     if (g.value.length==0) 
    {
        if(document.getElementById("error7")==null)
        {
            g.insertAdjacentHTML("afterend",' <p style="color:red", id="error7"> please fill the location</p>');  
        }
        
 }
 
                 else if(g.value.length !=0){  

        if(document.getElementById("error7")!=null){
            document.getElementById("error7").remove();
        }
    }




    
  
if(a.value!="" && b.value!=="" && c.value!=="" && d.value!=="" && e.value!==""  &&  f[0].checked==true || f[1].checked==true  &&   g.value!=="")

{

    var zx=function()
    {
if(f[0].checked==true)
{
return "male"
}
else{
    return "female"
}
    }


    var users={

        uname:a.value,
        pass:b.value,
        fname:c.value,
        lname:d.value,
        email:e.value,
       Gender: zx(),
       location:g.value
    
    }
    
    user.push(users);
    console.log(user);
    localStorage.a_users=JSON.stringify(user);

var tbl=document.getElementById("mytable");

var x=tbl.rows.length;
while(--x)
tbl.deleteRow(x);

for(var i=0;i<user.length;i++)
{
    var r=tbl.insertRow();
    var cell1=r.insertCell();
    var cell2=r.insertCell();
    var cell3=r.insertCell();
    var cell4=r.insertCell();
    var cell5=r.insertCell();
    var cell6=r.insertCell();
    var cell7=r.insertCell();
    
    cell1.innerHTML=user[i].uname;
    cell2.innerHTML=user[i].pass;
    cell3.innerHTML=user[i].fname;
    cell4.innerHTML=user[i].lname;
    cell5.innerHTML=user[i].email;
    cell6.innerHTML=user[i].Gender;
    cell7.innerHTML=user[i].location;
}

}	
})
