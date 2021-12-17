const email = document.getElementById('email');
const btn = document.getElementById('btn');
const errorMsg = document.getElementById('errorMsg');

// Quote form

const name = document.getElementById('name');
const emailMsg = document.getElementById('emailMsg');
const textarea = document.getElementById('textarea');
const btn2 = document.getElementById('btn2');
const quoteMsg = document.getElementById('quoteMsg');




btn.addEventListener('click', function(e){
    e.preventDefault();
    
    if(email.value === ""){
        errorMsg.innerHTML = "Please enter your email";       
    } else {
        errorMsg.innerHTML = "Email has been sent"; 
        email.value = ""; 
    }
    setTimeout(function(){
        errorMsg.innerHTML = "";
    },2000)     
})


btn2.addEventListener('click', function(e){
    e.preventDefault();

    if(name.value === "" || emailMsg.value === "" || textarea.value === ""){
        quoteMsg.innerHTML = "Ensure to fill all inputs"; 
    } else {
        quoteMsg.innerHTML = "Quote Submitted"; 
    }
})
