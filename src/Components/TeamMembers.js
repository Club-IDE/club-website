
import MemberCard from './MemberCard';

const TeamMembers = ({title, members}) => {
    
    return ( 
        <>
        <h1 className='font-bold lg:text-[4rem] text-4xl text-secondary mt-16 mb-12 text-center'>{title}</h1>
            <div className='flex flex-wrap justify-center'>
                {members.map((member)=>{
                    return (
                        <MemberCard name={member.name} role={member.role} />
                    )
                })}
            </div>
        </>
     );
}
 
export default TeamMembers;