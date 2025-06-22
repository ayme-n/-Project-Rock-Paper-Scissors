

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


function getHumanChoice() {

    let choice = prompt("Enter R,S or P : \n");

    return choice
}

function game(){

H_score = 0
C_score = 0

while((H_score !=3)&&(C_score !=3)){

    H = getHumanChoice()
    C = getComputerChoice()

    console.log("Pc choosed : " + C )

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

}

if(H_score == 3){
    console.log("You winner")
}
else{
    console.log("You Loser")
}

}

quit = false;

while(quit != true){

    game()

    let q = prompt("Enter q to quit or nothing to keep playing : ")

    if(q =="q"){
        quit = true
    }
}