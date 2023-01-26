import "animate.css"
import { useState } from "react"
import "./EasterEgg.css"

//rock = e, scissors = k, paper = b

const EasterEgg = () => {
    const [ hand, setHand ] = useState('b')
    const [ message, setMsg ] = useState('Hello there, Wanna play "Rock, Paper, Scissors"?')
    const [ loading, setLoading ] = useState(false) 

    const handleRock = () => {
        setLoading(true)
        rock('e')
    }

    const handlePaper = () => {
        setLoading(true)
        rock('b')
    }

    const handleScissor = () => {
        setLoading(true)
        rock('k')
    }

    const rock = (playerHand) => {
        setHand('e')
        setMsg('Rock...')
        setTimeout(paper, 1000, playerHand)
    }

    const paper = (playerHand) => {
        setHand('b')
        setMsg('paper...')
        setTimeout(scissors, 1000, playerHand)
    }

    const scissors = (playerHand) => {
        setHand('k')
        setMsg('scissors...')
        setTimeout(shoot, 1000, playerHand)
    }

    const shoot = (playerHand) => {
        const pcHand = getHand()
        setHand(pcHand)
        setMsg('Shoot...')
        setTimeout(result, 2000, playerHand, pcHand)
    }

    const getHand = () => {
        const nr = Math.floor(Math.random() * 3)
        let pcHand 
        if(nr === 0) {pcHand = 'e'}
        if(nr === 1) {pcHand = 'b'}
        if(nr === 2) {pcHand = 'k'}
        return pcHand
    }

    const result = (playerHand, pcHand) => {
        setLoading(false)
        if(playerHand === pcHand){
            setMsg('Euh!! Draw')
        } else if( 
            playerHand === 'b' && pcHand === 'k' ||
            playerHand === 'k' && pcHand === 'e' ||
            playerHand === 'e' && pcHand === 'b'){
            setMsg('I won!')
        } else {
            setMsg('Oh no! I lost!')
        }
    }
   
    return (
        <div className="content">
            <h3>{message}</h3>
        
            <img id="hand" alt="" src={"img/individial_signs/" + hand + ".png"}></img>

            { !loading && <div id="buttonDiv">
                <button onClick={handleRock}>Rock</button>
                <button onClick={handlePaper}>Paper</button>
                <button onClick={handleScissor}>Scissor</button>
            </div> }
            
        </div>
    )
}

export default EasterEgg