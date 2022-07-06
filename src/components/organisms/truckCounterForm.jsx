import { useState, useEffect } from 'react';
import NumberInputWithLabel from '../molecules/numberInputWithLabel';
import ToogleSwitch from '../molecules/toggleSwitch';
import StyledButton from '../atoms/styledButton';

// This is the template for the form that we use in order to take the input from the users and count the minimum number of trucks.

function TruckCounterForm(props) {
    const [operationalTime, setOperationalTime] = useState(0);
    const [maintenanceTime, setMaintenanceTime] = useState(0);
    const [counterResult, setCounterResult] = useState();
    const [isOddEven, setOddEven] = useState(false);
    const [maxMaintenance, setMaxMaintenance] = useState(29);
    const [maxOperational] = useState(30);
    
    // Count the number of required trucks to deliver chicken everyday
    const count = (operational, maintenance, oddEvenStatus) => {
        // If odd-even switch was toogled
        if(oddEvenStatus)
            return Math.ceil((operational + maintenance) / 2);
        return operational + maintenance; // Otherwise return the count for number of trucks without considering odd-even rule
    }

    // On Submit button click
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Change the content inside of the bubble of the chicken.
        // If odd-even rule is applicable, then the content will be adjusted.
        props.answerContentSetter(
            <div className='text-sm'>
                You need to have minimum: <br/>
                <span className="font-bold">
                    {isOddEven ? counterResult * 2 : counterResult} truck{isOddEven ? "s" : (counterResult > 1 ? "s" : "")} -
                    {isOddEven ? ` ${counterResult} Odd plate${(counterResult*2) > 2 ? "s" : ""}, ${counterResult} Even plate${(counterResult*2) > 2 ? "s" : ""}` : ""}
                </span>
                <br/>
                &emsp;to deliver chicken everyday in a month 🐔
            </div>
        );

        // Make sure to allow the bubble or floating card to change its content from the default welcoming text.
        props.welcomeStatusSetter(false);
    }

    // Adjust the maximum allowed values for maintenance field based on the input given on the operational field.
    // The total of maintanance + operational must not more than 30
    const dynamicInputHandler = (e) => {
        if(e.target.name === "operational") {
            setOperationalTime(e.target.value);
            setMaxMaintenance(maxOperational - e.target.value);
        } else {
            setMaintenanceTime(e.target.value);
        }
    }

    // Count the result in advance everytime an input is given to the form.
    useEffect(() => {
        setCounterResult(count(parseInt(operationalTime), parseInt(maintenanceTime), isOddEven));
    }, [operationalTime, maintenanceTime, isOddEven]);

    return(
        <form className='w-full pr-40' onSubmit={handleSubmit}>
            {/* The Number inputs */}
            <NumberInputWithLabel labelText="Operational Time" targetName="operational" placeholder="Number of days" minimum={1} onChangeFunction={dynamicInputHandler}/>
            <NumberInputWithLabel labelText="Maintenance Time" targetName="maintenance" placeholder="Number of days" maximum={maxMaintenance} containerStyling="mt-6" onChangeFunction={dynamicInputHandler}/>

            {/* The Odd-Even toogle and the submit button */}
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
    welcomeStatusSetter: null
}

export default TruckCounterForm;