import FloatingCard from '../../components/atoms/floatingCard';
import chicken from '../../assets/image/chicken.gif';

// In case that you want to put the chicken asset on the screen, you can use this component.
// You can also include the bubble on top of the chicken by defining the props as true, otherwise only the chicken will appear.

function ChickenWithBubble(props) {
    return (
        <div className={props.containerStyling}>
            {/* The bubble */}
            {props.withBubble ? 
                <div>
                    {/* Decide what text to show, set it as False if you want to show other text (not the default welcome text) */}
                    {props.welcomeStatus ? 
                        <FloatingCard cardText="Welcome to Truck Counter Pitik! 🐔" styling={props.bubbleStyling}/>
                    :
                        <FloatingCard cardText={props.answerContent} styling={props.bubbleStyling}/>
                    }
                </div>
            :
                null
            }
            
            {/* The chicken */}
            <img src={chicken} alt="Chicken Gif" className={props.chickenStyling}/>
        </div>
    )
}

ChickenWithBubble.defaultProps = {
    welcomeStatus: true,
    answerContent: "",
    withBubble: false,
    containerStyling: "w-full flex justify-end pr-52",
    bubbleStyling: "bg-white w-80 h-28 pl-3 mr-10 rounded-lg absolute right-64 bottom-28 align-middle",
    chickenStyling: "w-20 translate-y-0.5"
}

export default ChickenWithBubble;