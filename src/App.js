import logo from './assets/image/favicon.png';
import cloud from './assets/image/cloud.gif';
import grass from './assets/image/grass.gif';
import chicken from './assets/image/chicken.gif';

const grassMap = [
  {'alt': "Grass Gif Left", 'styling': "translate-y-0.5"},
  {'alt': "Grass Gif Most Right", 'styling': "translate-y-0.5 right-0"},
  {'alt': "Grass Gif Right", 'styling': "translate-y-2 right-7"},
  {'alt': "Grass Gif Middle", 'styling': "translate-y-0.5 left-2/4"},
]

const grassStyling = "w-24 rotate-[27deg] absolute bottom-0"

function App() {
  return (
    <div className="mt-10">
      <div className='ml-10'>
        <img src={logo} alt="Pitik Icon" className='w-10'/>
        <img src={cloud} alt="Cloud Gif" className='w-60 ml-20'/>
      </div>

      {/* Bottom Part */}
      <div>
        {/* Grass */}
        <div>
          {grassMap.map((object, index) => {
            return (
              <img src={grass} alt={object.alt} className={`${grassStyling} ${object.styling}`}/>
            )
          })}
        </div>

        {/* Chicken */}
        <div className='absolute bottom-0 right-20'>
          <img src={chicken} alt="Chicken Gif" className='w-72 translate-y-8'/>
        </div>

        {/* Orange Ground */}
        <div className='bg-orange h-8 min-w-full absolute bottom-0'></div> 

      </div>
    </div>
  );
}

export default App;
