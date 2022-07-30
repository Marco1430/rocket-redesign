import "./Subtitle.styles.css"

const Subtitle = (props) => {
    console.log("props:", props)
    return <p className={`subtitle ${props.variant}`}>Creamos o mejoramos tu tienda en linea.</p>
};
export default Subtitle;