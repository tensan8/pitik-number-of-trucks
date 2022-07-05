import Switch from 'react-switch';

function ToogleSwitch(props) {
    return (
        <div className={props.containerStyling}>
            <label className='h-max my-auto mr-3'>{props.labelText}</label>
            <div className='mt-2'>
                <Switch onChange={props.switchHandle} checked={props.checkedStatus} onColor="#FF8901"/>
            </div>
        </div>
    )
}

ToogleSwitch.defaultProps = {
    containerStyling: "flex",
    labelText: "",
    switchHandle: null,
    checkedStatus: false
}

export default ToogleSwitch;