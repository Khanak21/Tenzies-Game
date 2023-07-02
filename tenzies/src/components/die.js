

export default function Die(props) {
    return (
        <div className="die-face"
        style={{backgroundColor: props.isHeld===false? "white" : "greenyellow"}}
        onClick={props.holdDice}
        >
            <h2 className="die-num"
            >{props.value}</h2>
        </div>
    )
}