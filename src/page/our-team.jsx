import TeamMemberCard from "../components/team-member-card"
import Divider from "../components/divider"
export default function OurTeam(){
    return(
        <section className="our-team">
            <div className="our-team-header">
                <h2>Our team is the best!</h2>
                <p>A top-notch veterinary team comprises dedicated professionals who collaborate to provide high-quality care for animals. At its core, this team includes skilled veterinarians who diagnose and treat illnesses, veterinary technicians who assist with medical procedures. </p>
            </div>
            <div className="our-team-container">
                <TeamMemberCard/>
                <TeamMemberCard/>
                <TeamMemberCard/>
                <TeamMemberCard/>
            </div>
        <Divider classes='our-team-divider'/>
        </section>
    )
}