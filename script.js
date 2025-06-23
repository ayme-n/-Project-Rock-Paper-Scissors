


function getComputerChoice() {

    random = Math.random()

    if(random < 0.33333333333){
        return "R";
    }
    else if(random >0.66666666666){
        return "S";
    }
    else{
        return "P";
    }
}

H_score = 0
C_score = 0


function play_round(H){
    

    C = getComputerChoice()

    if (H == "R"){

        if (C == "P"){
            C_score++
        }
        else if(C == "S"){
            H_score++
        }

    }
    else if(H == "P"){

        if (C == "R"){
            H_score++
        }
        else if(C == "S"){
            C_score++
        }

    }
    else{

        if (C == "R"){
            C_score++
        }
        else if(C == "P"){
            H_score++
        }

    }

    check()

}

function restart(){

H_score=0
C_score=0
score.textContent =""
winner.textContent = ""


}

function check(){


score.textContent = "you : " + H_score + ", computer : " + C_score
    



if(H_score == 3){
    
    winner.textContent = "You winner"
    
}
else{
    if (C_score==3)
    winner.textContent = "You Looser"
}


}


let Paper = document.querySelector(".Paper")
let Rock = document.querySelector(".Rock")
let Scissor = document.querySelector(".Scissor")
let reset = document.querySelector(".re-play")



 Paper.addEventListener("click",()=>{
        
        play_round("P")
    })
    Rock.addEventListener("click",()=>{play_round("R")
    })
    Scissor.addEventListener("click",()=>{ play_round("S")
    })
 reset.addEventListener("click",()=>{
        
        restart()
    })

let result = document.querySelector(".result")

let score = document.createElement("h4")

result.appendChild(score)



let winner = document.createElement("h1")

result.appendChild(winner)
