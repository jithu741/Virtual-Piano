var noOfButtons = document.querySelectorAll(".keys").length;



for (i = 0; i  < noOfButtons; i++) {
    document.querySelectorAll(".keys")[i].addEventListener("click",function ( ) {

        
        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);


        buttonAnimation(buttonInnerHTML);

    });
} 


document.addEventListener("keypress",function(event) {
   makeSound(event.key);

   buttonAnimation(event.key);
});


function makeSound(key) {

    switch (key) {
        case "q":

            var audio1 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203458__tesabob2001__a3.mp3");
            audio1.play();
        break;

        case "w":

            var audio2 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203459__tesabob2001__a-5.mp3");
            audio2.play();
        break;

        case "e":

            var audio3 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203460__tesabob2001__a-4.mp3");
            audio3.play();
        break; 

        case "h":

            var audio4 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203462__tesabob2001__b4.mp3");
            audio4.play();
        break;   
            
        case "j":

            var audio5 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203463__tesabob2001__b3.mp3");
            audio5.play();
        break; 
            
        case "k":

            var audio6 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203464__tesabob2001__a5.mp3");
            audio6.play();
        break;

        case "l":

            var audio7 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203465__tesabob2001__a4.mp3");
            audio7.play();
        break;


        case "x":

            var audio8 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203466__tesabob2001__c-3.mp3");
            audio8.play();
        break;


        case "c":

            var audio9 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203467__tesabob2001__b5.mp3");
            audio9.play();
        break;


        case "v":

            var audio10 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203500__tesabob2001__f-4.mp3");
            audio10.play();
        break;


        case "b":

            var audio11 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203501__tesabob2001__f-3.mp3");
            audio11.play();
        break;

        case "n":

            var audio12 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203470__tesabob2001__e3.mp3");
            audio12.play();
        break;

        case "m":

            var audio13 = new Audio("12995__tesabob2001__piano-keys-c3-c6/203471__tesabob2001__e4.mp3");
            audio13.play();
        break;
    
        default:
            console.log(buttonInnerHTML);
            
    }

}


function buttonAnimation (currentKey) {
   var activeButton = document.querySelector("."+ currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
       activeButton.classList.remove("pressed");},300);
   }