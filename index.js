for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        var buttonName = this.innerHTML;

        switch(buttonName)
        {
            case "w":
                var audio = new Audio("m1.mp3");
                audio.play();
                break;

            case "a":
                var audio = new Audio("m2.mp3");
                audio.play();
                break;

            case "s":
                var audio = new Audio("m3.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("m4.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("m5.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("m6.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("m7.mp3");
                audio.play();
                break;

                
        }

    });
} 



