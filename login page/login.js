

document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(!username || !password){
        alert("please entery username and password");
        return;
    }

   window.location.href="/loginsuccessfull.html";
 
   
   document.getElementById("loginForm").reset();
});




