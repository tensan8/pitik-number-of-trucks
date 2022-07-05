// Those who want to use the template of label and number input can use this component instead
import NumberInput from '../atoms/numberInput';

function NumberInputWithLabel(props) {
    return (
        <div className={props.containerStyling}>
            <label className='block'>{props.labelText}</label>
            <NumberInput targetName={props.targetName} placeholder={props.placeholder} minimum={props.minimum} onChangeFunction={props.onChangeFunction}/>
        </div>
    )
}

NumberInputWithLabel.defaultProps = {
    labelText: "",
    containerStyling: "mt-2"
}

export default NumberInputWithLabel