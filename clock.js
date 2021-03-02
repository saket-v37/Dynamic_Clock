// Dom Element Selection
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Am or Pm
const showAmPm=true;
// show time
function showTime(){
    // let today=new Date(2021, 04, 02, 20, 20, 08),
    let today=new Date(),
     hour=today.getHours(),
     min=today.getMinutes(),
     sec=today.getSeconds();
     
    // set Am or Pm 
    const amPm = hour>=12 ? 'PM' : 'AM';

    // 12 Hours format
    hour=hour%12 || 12;

    // output time
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm :''}`;
    
    setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n){
    return (parseInt(n,10)<10 ? '0':'')+n;
}
// Set Baground and greeting
function setBgGreeting(){   
    // let today=new Date(2021, 04, 02, 20, 30, 08),
    let today=new Date(),
     hour=today.getHours();

    if(hour<12){
        // Good Morning
        document.body.style.backgroundImage="url('img/morning.jpg')";
        greeting.textContent='Good Morning';
    }
    else if(hour<18){
        // Good Afternoon
        document.body.style.backgroundImage="url('img/afternoon.jpg')";
        greeting.textContent='Good Afternoon';
    }
    else{
        // Good Evening
        document.body.style.backgroundImage="url('img/night.jpg')";
        greeting.textContent='Good Evening';
        document.body.style.color='white';
    }
}
// Get Name
function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent='Enter Name';
    }
    else{
        name.textContent=localStorage.getItem('name');
    }
}
// Set Name
function setName(e){
    if(e.type==='keypress'){
        // make sure enter is pressed
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();

        }

    }
    else{
        localStorage.setItem('name',e.target.innerText);
    }
}
// Get Focus
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent='Enter focus';
    }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
}
// Set Focus
function setFocus(e){
    if(e.type==='keypress'){
        // make sure enter is pressed
        if(e.which==13 || e.keyCode==13){
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();

        }

    }
    else{
        localStorage.setItem('focus',e.target.innerText);
    }
}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
focus.addEventListener('keypress',setFocus);
focus.addEventListener('blur',setFocus);

// Run
showTime();
setBgGreeting();
getName();
getFocus();