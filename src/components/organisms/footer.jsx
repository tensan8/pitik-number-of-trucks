import ChickenWithBubble from "../molecules/chickenWithBubble";
import LandAndGrassFooter from "../molecules/landAndGrassFooter";

function Footer(props) {
    return(
        <div>
            <LandAndGrassFooter extraObject={
                <ChickenWithBubble welcomeStatus={props.welcomeStatus} answerContent={props.answerContent} withBubble={props.withBubble}/>
            } />
        </div>
    )
}

export default Footer;