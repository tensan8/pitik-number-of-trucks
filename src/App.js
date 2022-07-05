import logo from './assets/image/favicon.png';
import cloud from './assets/image/cloud.gif';
import grass from './assets/image/grass.gif';
import chicken from './assets/image/chicken.gif';
import Switch from 'react-switch';
import { useEffect, useState } from 'react';

function App() {
  const [operationalTime, setOperationalTime] = useState(0);
  const [maintenanceTime, setMaintenanceTime] = useState(0);
  const [isOddEven, setOddEven] = useState(false);
  const [welcomeStatus, setWelcomeStatus] = useState(true);
  const [counterResult, setCounterResult] = useState();
  const [answerContent, setAnswerContent] = useState();

  const grassMap = [
    {'alt': "Grass Gif Left", 'styling': "ml-10"},
    {'alt': "Grass Gif Middle", 'styling': "ml-96"},
    {'alt': "Grass Gif Right", 'styling': "ml-96 translate-x-28"},
    {'alt': "Grass Gif Most Right", 'styling': "ml-52"},
  ];

  // Count the number of required trucks to deliver chicken everyday
  const count = (operational, maintenance, oddEvenStatus) => {
    // If odd-even switch was toogled
    if(oddEvenStatus)
      return Math.ceil((operational + maintenance) / 2);
    return operational + maintenance; // Otherwise return the count for number of trucks without considering odd-even rule
  }

  const handleOddEven = () => {
    setOddEven(!isOddEven); 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setAnswerContent(
      <div className='text-sm'>
        You need to have minimum: <br/>
        <span className="font-bold">
          {isOddEven ? counterResult * 2 : counterResult} truck{counterResult > 1 ? "s" : ""} -
          {isOddEven ? ` ${counterResult} Odd plates, ${counterResult} Even plates` : ""}
        </span>
        <br/>
        &emsp;to deliver chicken everyday 🐔
      </div>
    );

    setWelcomeStatus(false);
  }

  useEffect(() => {
    setCounterResult(count(parseInt(operationalTime), parseInt(maintenanceTime), isOddEven));
  }, [operationalTime, maintenanceTime, isOddEven]);

  return (
    <div className="mt-10 flex flex-col h-screen"> {/* Main container */}
      {/* Upper Part */}
      <div className='flex-grow'>
        <div className='grid grid-cols-2 gap-10'>
          <div className='ml-10'>
            <img src={logo} alt="Pitik Icon" className='w-10'/>
            <img src={cloud} alt="Cloud Gif" className='w-60 ml-20'/>
          </div>

          <form className='w-full pr-40' onSubmit={handleSubmit}>
            <div className='mt-2'>
              <label htmlFor="Operational Time" className='block'>Operational Time</label>
              <input type="number" name="operational" className='rounded-md w-full h-11 mt-1 text-md px-3' onWheel={(e) => e.target.blur()} min={1} placeholder="Number of Days" onChange={(e) => setOperationalTime(e.target.value)}/>
            </div>

            <div className='mt-6'>
              <label htmlFor="Maintenance Time" className='block'>Maintenance Time</label>
              <input type="number" name="maintenance" className='rounded-md w-full h-11 mt-1 text-md px-3' onWheel={(e) => e.target.blur()} min={0} placeholder="Number of Days" onChange={(e) => setMaintenanceTime(e.target.value)}/>
            </div>

            <div className='flex mt-6'>
              <label className='h-max my-auto mr-3'>Odd-Even Rule</label>
              <div className='mt-2'>
                <Switch onChange={handleOddEven} checked={isOddEven} onColor="#FF8901"/>
              </div>
              <div className='flex justify-end grow'>
                <button type='submit' className='text-white bg-orange rounded-md px-5 font-bold px-10'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      
      {/* Bottom Part */}
      <div className='flex'>
        <div className='relative w-full'>
          {/* Grass */}
          <div className='absolute translate-y-16 z-0 w-full'>
            <div className='grid grid-cols-4'>
              {grassMap.map((object, index) => {
                return (
                  <img src={grass} alt={object.alt} className={`w-12 ${object.styling}`} key={index}/>
                )
              })}
            </div>
          </div>

          {/* Chicken */}
          <div className='w-full flex justify-end pr-52'>
            <div className='bg-white w-80 h-28 pl-3 mr-10 rounded-lg absolute -translate-y-28 -translate-x-10 align-middle'>
              <div className='h-full flex'>
                <div className='my-auto'>
                  {welcomeStatus ? 
                    <div>
                      Welcome to Truck Counter Pitik! 🐔
                    </div>
                  :
                    answerContent
                  }
                </div>   
              </div>
            </div>
            <img src={chicken} alt="Chicken Gif" className='w-20 translate-y-0.5'/>
          </div>

          {/* Orange Ground */}
          <div className='bg-orange h-8 min-w-full relative z-10'></div> 
        </div>
      </div>
    </div>
  );
}

export default App;
