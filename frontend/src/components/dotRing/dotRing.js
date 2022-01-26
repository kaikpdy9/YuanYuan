import useMousePosition from "../../hooks/useMousePosition";
import './dotRing.css'

const DotRing=()=>{

    const {x,y}=useMousePosition()

    console.log(x,y,'mouse')
    return(
        <div>
            <div style={{left:`${x}px`,top:`${y}px`}}
            className="ring">

            </div>
        </div>
    )
}

export default DotRing