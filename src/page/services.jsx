import ServiceCard from "../components/service-card.jsx"
import Divider2 from "../components/divider2.jsx"
export default function Services(){
    return(
        <section className="services">
            <div className="services-header">
                <h2>We offer a variety of services of high quality.</h2>
            </div>
            <div className="services-container">
                <div className="service">
                    <ServiceCard serviceName='Service Name 1' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, quasi. Incidunt deleniti minus id iusto obcaecati ea reiciendis?'/>
                </div>
                <div className="service">
                <ServiceCard serviceName='Service Name 2' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, quasi. Incidunt deleniti minus id iusto obcaecati ea reiciendis?'/>
                </div>
                <div className="service">
                <ServiceCard serviceName='Service Name 3' text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, quasi. Incidunt deleniti minus id iusto obcaecati ea reiciendis?'/>
                </div>
            </div>
            <Divider2/>
        </section>
    )
}