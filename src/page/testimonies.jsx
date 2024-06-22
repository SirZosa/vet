import { useState, useEffect } from 'react'
import Testimony from '../components/testimony/index.jsx'
import pic from '../assets/user.png'
import Divider from '../components/divider.jsx'
export default function Testimonies(){
    const [number, setNumber] = useState(0)
    const tests = [
        {
            text:'Our staff provides compassionate care, personalized treatment plans, and thorough explanations, ensuring pet owners feel confident and well informe, ensuring customer satisfaction.',
            pname:'Omar Sosa'
        },
        {
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore corporis qui vitae, deleniti assumenda cum officia necessitatibus ex aliquam beatae vero nobis aliquid minus harum voluptatum at perspiciatis iure.',
            pname:'Lorem Ipsum'
        }]

        useEffect(() => {
            const intervalId = setInterval(() => {
                if(number === 1){
                    setNumber(0)
                }
                else if(number === 0){
                    setNumber(1)
                }
            }, 7000)
        
            return () => clearInterval(intervalId)
          }, [number])
    

    return(
        <section className="testimonies">
            <div className="testimonies-header">
                <h3>Reviews</h3>
                <p>Our staff provides compassionate care, personalized treatment plans, and thorough explanations, ensuring pet owners feel confident and well informe, ensuring customer satisfaction.</p>
            </div>
            <Testimony src={pic}>
                <Testimony.Text>{tests[number].text}</Testimony.Text>
                <Testimony.Name>{tests[number].pname}</Testimony.Name>
                <Testimony.Organization>2024</Testimony.Organization>
            </Testimony>
            <Divider classes='testimonies-divider'/>
        </section>
    )
}