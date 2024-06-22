export default function ContactFrom(){
    return(
        <div className="contact-form">
            <h4>Online Inquiry</h4>
            <form action={(e)=>e.preventDefault()}>
                <input type="text" placeholder="Name" />
                <input type="tel" placeholder="Number" />
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button className="contact-form-btn">SEND</button>
            </form>
        </div>
    )
}