

function Button(props) {
    const mostrarAlerta = () => {
        alert(`Mostranod boton ${props.title}`);
    }
    return (
        <>
            <button     
                onClick={mostrarAlerta}>
                {props.title}
            </button>
        </>
    )
}
export default Button