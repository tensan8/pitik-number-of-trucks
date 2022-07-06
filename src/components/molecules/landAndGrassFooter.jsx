import { grassMap } from '../../data/grassData';
import grass from '../../assets/image/grass.gif';

// This component is the land and grass graphic on the bottom of the screen.
// You can put extra object on top of it as you wish by using the extra object props, e.g. chiecken component.

function LandAndGrassFooter(props) {
    return (
        <div className='flex'>
            <div className='relative w-full'>
                {/* Grass */}
                <div className='z-0 w-full absolute bottom-3'>
                    <div className='grid grid-cols-4'>
                        {/* Check the positioning of the grasses on the data folder */}
                        {grassMap.map((object, index) => {
                            return (
                                <img src={grass} alt={object.alt} className={`w-12 ${object.styling}`} key={index}/>
                            )
                        })}
                    </div>
                </div>

                {/* Something on top of the ground if you wanted */}
                {props.extraObject}

                {/* Orange Ground */}
                <div className='bg-orange h-8 min-w-full relative z-10'></div> 
            </div>
        </div>
    )
}

LandAndGrassFooter.defaultProps = {
    extraObject: null
}

export default LandAndGrassFooter;