const btnstart=document.querySelector(".start");
const btnstop=document.querySelector(".stop");
const btnreset=document.querySelector(".reset");
let hrs=min=sec=ms=0;
let startTimer;

btnstart.addEventListener("click",()=>{
    btnstart.classList.add("start-active");
    btnstop.classList.remove("stop-active");
   startTimer=setInterval(()=>{
    ms++;
    if(ms==100){
        sec++;
        ms=0;
    };
    if(sec==60){
        min++;
        sec=0;
        
    }
    if(min==60){
        hrs++;
        min=0;

    }

    updateDisplay();

   },10);
});
btnstop.addEventListener("click",()=>{
    btnstart.classList.remove("start-active");
    btnstop.classList.add("stop-active");
    clearInterval(startTimer);
});
btnreset.addEventListener("click",()=>{
    let hrs=min=sec=ms=0;
    btnstart.classList.remove("start-active");
    btnstop.classList.remove("stop-active");
    clearInterval(startTimer);
    updateDisplay(); 
});

function updateDisplay(){
    thrs=hrs<10? "0"+hrs : hrs;
    tmin=min<10 ? "0"+min :min;
    tsec=sec<10 ? "0"+sec :sec;
    tms=ms<10 ? "0" +ms :ms;
   
    document.querySelector(".hrs").innerText=thrs;
    document.querySelector(".min").innerText=tmin;
    document.querySelector(".sec").innerText=tsec;
    document.querySelector(".ms").innerText=tms;
}