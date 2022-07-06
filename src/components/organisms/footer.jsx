import ChickenWithBubble from "../molecules/chickenWithBubble";
import LandAndGrassFooter from "../molecules/landAndGrassFooter";

// This is the template for the default footer where we will have a set of ground, grass, chicken, and its bubble.\

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