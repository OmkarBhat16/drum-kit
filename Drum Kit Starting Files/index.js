
var drums = document.getElementsByClassName("drum")
console.log(drums, typeof drums)

function playSound(keyName){
    switch(keyName){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()                
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()                
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()                
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()                
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()                
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()                
            break;
        default:
            console.log("Invalid Key Pressed")
        }
        var instr = document.querySelector("."+keyName)
        instr.classList.add("pressed")
        setTimeout(function() { 
            instr.classList.remove("pressed")
        }, 150)
    }

for(i=0;i<drums.length;i++){
    drums[i].addEventListener("click", function(){
        var bName = this.innerHTML
        playSound(bName)
    })
}

document.addEventListener("keydown", function (event){
    playSound(event.key)
})
