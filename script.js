
/************* calculating amounts and room numbers *********/
function Calculate(operator,valueId,roomId,x){
   
    Value=document.getElementById(valueId);
    Room=document.getElementById(roomId);
    
    var amount= parseInt(Value.innerText);
    var room=parseInt(Room.innerText);
    if(operator=='-'){amount-=x;room--;if(amount<=0){amount=0;room=0;}}
    else{amount+=x;room++;}

    Value.innerText=amount;
    Room.innerText=room;

}

function EventHandling(id,operator,side,value){
    document.querySelector(id).addEventListener(
        'click',
        ()=>{Calculate(operator,`${side}-value`,`${side}-rooms`,value);}
    );
}

EventHandling('#left-minus','-','left',199);
EventHandling('#left-plus','+','left',199);
EventHandling('#right-minus','-','right',249);
EventHandling('#right-plus','+','right',249);



/************* SignUp *********/

function SignUpCalcuate(side){
    document.querySelector(`.${side}-signup`).addEventListener(
        'click',
        ()=>{
           var room= document.getElementById(`${side}-rooms`).innerText; 
           var thanks=document.querySelector(`.${side}-thanks`);
           thanks.style.display='block';
           document.querySelector(`#${side}-thank-you`).innerHTML=room;
        }
    );
}

SignUpCalcuate('left');
SignUpCalcuate('right');




/***************  Number of rooms chosen   ******************/

function NumberOfRooms(side){
    document.querySelector(`.${side}-signup`).addEventListener(
        'click',
        ()=>{
            document.querySelector(`.${side}-thanks`).style.opacity=1;
            document.querySelector(`#${side}-thank-you`).innerHTML=document.getElementById(`${side}-rooms`).innerHTML;
        }
    );
}

NumberOfRooms("left")
NumberOfRooms("right")
