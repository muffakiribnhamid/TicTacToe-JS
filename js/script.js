//Game Written In Pure JS
//Initializing Some Variables
const music = new Audio("/assets/music.mp3")
const ting = new Audio("/assets/ting.mp3")
const gameOver = new Audio("/assets/gameover.mp3")
let isGameOver = false;
let turn = "X"

// Function to change the turn
const changeTurn = () => {
    return turn === "X"?"O":"X"
    //Here if turn === "X" then return 0 else return X

}

// Function to check for a win

const checkWin  = () => {
    let boxtext = document.getElementsByClassName('boxText')
    let wins  = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,5,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],

    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText =boxtext[e[0]].innerText + " Won"
            gameOver.play()
            document.querySelector('.imgBox').style.width = '300px'
            document.querySelector('.line').style.transform  = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width  = "20vw"
            isGameOver = true;
        }
    
        
    })

}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',()=> {
        if(boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn()
            ting.play()
            checkWin()
            if(!isGameOver) {
                document.querySelector('.info').innerText = "Turn for" + turn;
            }
        }
    })
})

// Reset Game Logic
document.querySelector('#reset').addEventListener('click', ()=> {
    let boxes = Array.from(document.querySelectorAll('.boxText'))
    boxes.forEach((e)=> {
        e.innerText = ""
    })
    turn = "X"
    isGameOver = false;
    document.querySelector('.imgBox').style.width = '0px'
    document.querySelector('.line').style.width  = "0vw"
    document.querySelector('.info').innerText = "Turn for" + turn;

    

})