const nam=document.getElementById('Name')
const email=document.getElementById('Email')
const phone=document.getElementById('Phone')
const password=document.getElementById('password')
const phoneRegEx = new RegExp (/^[0-9]g/)
const passwordRegEx = new RegExp (/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]))/)

nam.addEventListener('change',function(){
    if(nam.value.length<5){
        alert('name must be at least 5 caracters');
        nam.setAttribute('class','form-control is-invalid');
        nam.focus();
    }
})
email.addEventListener('change',function(){
    if(!email.value.includes('@')){
        alert('Email requires @');
        email.setAttribute('class','form-control is-invalid');
        email.focus();
    }
})
phone.addEventListener('change',function(){
    if(!phoneRegEx.test(phone.value)||(phone.value.length<8)){
        alert('Error phone Number');
        phone.setAttribute('class','form-control is-invalid');
        phone.focus();
    }
})
password.addEventListener('change',function(){
    if(!passwordRegEx.test(password.value)||(password.value.length<6)){
        alert('Error phone Number');
        password.setAttribute('class','form-control is-invalid');
        password.focus();
    }
})
