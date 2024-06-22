import Divider from "../components/divider.jsx"
export default function Main(){
    return(
        <section className="main">
            <div className="main-inside">
                <h1 className="main-title">Best Veterinary for your pets!</h1>
                <p className="main-text">We count with the best services for all kind of pets out there.</p>
                <a className="main-contact" href="#">Contact Us!</a>
            </div>
            <Divider/>
        </section>
    )
}