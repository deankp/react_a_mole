import { useEffect } from 'react'
import MoleHill from '../molehill.png'

function EmptySlot(props){
    
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={MoleHill} />
        </div>
    )
}

export default EmptySlot