// This component can be used to include a card that can be placed somewhere on the screen

function FloatingCard(props) {
    return (
        <div className={props.styling}>
            <div className='h-full flex'>
                <div className='my-auto'>
                    {props.cardText}
                </div>   
            </div>
        </div>
    )
}

FloatingCard.defaultProps = {
    cardText: "",
    styling: "bg-white w-80 h-28 pl-3 mr-10 rounded-lg align-middle"
}

export default FloatingCard;