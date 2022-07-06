import { useState, useEffect } from 'react';
import NumberInputWithLabel from '../molecules/numberInputWithLabel';
import ToogleSwitch from '../molecules/toggleSwitch';
import StyledButton from '../atoms/styledButton';

function TruckCounterForm(props) {
    const [operationalTime, setOperationalTime] = useState(0);
    const [maintenanceTime, setMaintenanceTime] = useState(0);
    const [counterResult, setCounterResult] = useState();
    const [isOddEven, setOddEven] = useState(false);
    
    // Count the number of required trucks to deliver chicken everyday
    const count = (operational, maintenance, oddEvenStatus) => {
        // If odd-even switch was toogled
        if(oddEvenStatus)
            return Math.ceil((operational + maintenance) / 2);
        return operational + maintenance; // Otherwise return the count for number of trucks without considering odd-even rule
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.answerContentSetter(
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

        props.welcomeStatusSetter(false);
    }

    useEffect(() => {
        setCounterResult(count(parseInt(operationalTime), parseInt(maintenanceTime), isOddEven));
    }, [operationalTime, maintenanceTime, isOddEven]);

    return(
        <form className='w-full pr-40' onSubmit={handleSubmit}>
            <NumberInputWithLabel labelText="Operational Time" targetName="operational" placeholder="Number of days" minimum={1} onChangeFunction={(e) => setOperationalTime(e.target.value)}/>
            <NumberInputWithLabel labelText="Maintenance Time" targetName="maintenance" placeholder="Number of days" containerStyling="mt-6" onChangeFunction={(e) => setMaintenanceTime(e.target.value)}/>

            <div className='flex mt-6'>
                <ToogleSwitch labelText="Odd-Even Rule" switchHandle={() => setOddEven(!isOddEven)} checkedStatus={isOddEven} />

                <div className='flex justify-end grow'>
                    <StyledButton buttonText="Submit"/>
                </div>
            </div>
        </form>
    )
}

TruckCounterForm.defaultProps = {
    answerContentSetter: null,
    welcomeStatusSetter: null,

}

export default TruckCounterForm;