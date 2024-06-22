import userImg from '../assets/user.png'

export default function TeamMemberCard(){
    return(
        <div className="member-card">
            <img className='team-img' src={userImg} alt="" />
            <h3 className="member-name">Team Member</h3>
            <p className="member-bc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi dolore quia blanditiis necessitatibus aperiam magnam sint.</p>
        </div>
    )
}