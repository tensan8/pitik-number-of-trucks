// Those who want to use the input only can access this component

function NumberInput(props) {
    return (
        <div>
            <input type="number" 
                name={props.targetName}
                className={props.styling} 
                onWheel={(e) => e.target.blur()} 
                min={props.minimum}
                max={props.maximum}
                placeholder={props.placeholder}
                required={true}
                onChange={props.onChangeFunction}
            />
        </div>
    );
}

NumberInput.defaultProps = {
    targeName: "",
    minimum: 0,
    maximum: 30,
    placeholder: "",
    styling: "rounded-md w-full h-11 mt-1 text-md px-3",
    onChangeFunction: null
}

export default NumberInput;