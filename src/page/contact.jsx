import ContactForm from "../components/contact-form"
export default function Contact(){
    return(
        <section className="contact">
            <h3 className="contact-header">Contact</h3>
            <div className="contact-container">
                <ContactForm/>
                <div className="contact-info">
                    <h3 className="contact-info-header">Contact details</h3>
                    <div className="contact-info-coms">
                        <a href="">loremIpsum@lorem.com</a>
                        <br/>
                        <a href="">(999) 999-9999</a>
                    </div>
                    <div className="contact-info-locations">
                        <div className="location">
                            <h4>Texas</h4>
                            <p>loremIpsum street</p>
                            <p>LoremIpsum street 2</p>
                        </div>
                        <div className="location">
                            <h4>California</h4>
                            <p>loremIpsum street</p>
                            <p>LoremIpsum street 2</p>
                        </div>
                        <div className="location">
                            <h4>New York</h4>
                            <p>loremIpsum street</p>
                            <p>LoremIpsum street 2</p>
                        </div>
                    </div>
                </div>      
            </div>
        </section>
    )
}