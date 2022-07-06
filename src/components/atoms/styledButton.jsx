// This component is the styled button with being submit button in default

function StyledButton(props) {
    return (
        <button type={props.buttonType} className={props.styling}>
            {props.buttonText}
        </button>
    )
}

StyledButton.defaultProps = {
    buttonType: "submit",
    buttonText: "",
    styling: "text-white bg-orange rounded-md px-5 font-bold px-10"
}

export default StyledButton;