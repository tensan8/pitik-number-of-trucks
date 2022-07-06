import logo from './assets/image/favicon.png';
import cloud from './assets/image/cloud.gif';
import { useState } from 'react';
import Footer from "./components/organisms/footer";
import TruckCounterForm from './components/organisms/truckCounterForm';

function App() {
  const [welcomeStatus, setWelcomeStatus] = useState(true);
  const [answerContent, setAnswerContent] = useState();
  
  return (
    <div className="mt-10 flex flex-col h-screen">
      <div className='flex-grow'>
        <div className='grid grid-cols-2 gap-10'>
          <div className='ml-10'>
            <img src={logo} alt="Pitik Icon" className='w-10'/>
            <img src={cloud} alt="Cloud Gif" className='w-60 ml-20'/>
          </div>

          <TruckCounterForm answerContentSetter={setAnswerContent} welcomeStatusSetter={setWelcomeStatus} />
        </div>
      </div>

      <Footer welcomeStatus={welcomeStatus} answerContent={answerContent} withBubble={true}/>
    </div>
  );
}

export default App;
