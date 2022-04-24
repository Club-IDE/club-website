import TeamMembers from './TeamMembers';
import MemberCard from './MemberCard';
import { Profiler, useState } from 'react';


const Team = () => {

    const faculties = [{name: 'Dr.Dhaval Parikh',role: 'HOD/Senior Advisor'},
    {name: 'john',role: 'lead'},
    {name: 'max',role: 'developer'}]

    const ClubMembers = [
        {name:'Param Radadiya' , role:'President'},
        {name:'Pooja Ranpara' , role:'Vice President'},
        {name:'Keyur Unadkat' , role:'Secretary'},
        {name:'Nigam Patel' , role:'Senior Student Chair'},
        {name:'Akul Upadhyay' , role:'Senior Student Chair'},
        {name:'Bhakti Trivedi' ,role:'Documentation Head' },
        {name:'Shubham Jitiya' , role:'Event Head'  },
        {name:'Hiren Pokar' , role:'Android Development Lead'},
        {name:'Akshat Shah' , role:'Web Development Lead'},
        {name:'Naresh Purohit' , role:'Start Up Lead'},
        {name:'Krutik Patel' , role:'AI/ML Lead'},
        {name:'Divyesh Vyas' , role:'CP Group Lead'},
    ];
    const GDSCMembers = [
        {name:'Prof. Yogendra Tank', role:'Faculty Coordinator'},
        {name:'Param Radadiya', role:'GDSC Lead'},
        {name:'Akul Upadhyay', role:'Core Team Member'},
        {name:'Nigam Patel', role:'Core Team Member'},
        {name:'Divyesh Vyas', role:'Core Team Member'},
        {name:'Jay Prajapati', role:'Core Team Member'},
        {name:'Suryadipsinh Vaghela', role:'Volunteer'},
        {name:'Parth Parmar', role:'Volunteer'},
        {name:'Viveena Rathi', role:'Volunteer'},
        {name:'Jevin Mangukiya', role:'Volunteer'},
    ];
    const CodechefMembers = [
        {name:'Prof. Ashvin Prajapati', role:'Faculty Coordinator'},
        {name:'Divyesh Vyas' , role:'President'},
        {name:'Bhakti Trivedi' , role:'Event Lead'},
        {name:'Hardik Kardam' , role:'CP Lead'},
        {name:'Suryadipsinh Vaghela' , role:'Media & Outreach Lead'}
    ];

    const Developers = [
        {name:'Kunj Dabhi' , role:'Developer'},
        {name:'Shlok Jadeja' , role:'Developer'},
        {name:'Dhruva Patel' , role:'Developer'},
        {name:'Prachi Patel' , role:'Developer'},
        {name:'Jay Prajapati' , role:'Developer'},

    ]



    return (
        <>
        <div className="faculties mx-auto max-w-full">
            <div className="flex justify-center bg-gradient-to-tr from-[#40599C] to-[#ffffff] pt-32 min-w-full">
                <h2 className=" text-center mb-60 mt-10 font-bold text-4xl text-secondary">TEAM</h2>
            </div>

            <TeamMembers title={'Faculties'} members={faculties} />
            <TeamMembers title={'Club Leads'} members={ClubMembers} />
            <TeamMembers title={'GDSC Leads'} members={GDSCMembers} />
            <TeamMembers title={'Codechef Leads'} members={CodechefMembers} />
            <TeamMembers title={'Developers'} members={Developers} />



        </div>
        </>


     );

    }

export default Team;