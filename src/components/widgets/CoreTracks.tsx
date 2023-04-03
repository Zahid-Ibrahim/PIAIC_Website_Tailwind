import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";

const CoreTracksData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1
  },
  {
    header: "Quarter II",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2
  },
  {
    header: "Quarter III",
    description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3
  },
]
const CoreTracks = () => {
 const header= "Core Courses \n (Common in All Specializations):"
    return (
    <section className="mt-16 lg:mt-26">
      <Wrapper>
      <div className="max-w-screen-md">
        <h4 className="text-teal-700 font-semibold text-lg mt-4"> Program of Studies</h4>
        <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2>
        <p className="mt-3 text-xl text-slate-600">Every participant of the program will start by completing the following three core courses:
</p>
      <div className="my-20">
        <Button text="Learn More" />
      </div>
      
      </div>
      <div className="my-20 flex flex-col gap-x-8 md:flex-row gap-y-6">
      {
        CoreTracksData.map((item,i) => 
          (
          
          <QuarterBox
          key={item.number}
          header={item.header}
           description={item.description}
           number={i + 1}
             />
             
          )
        ) 
}    
      
       

        
         
      </div>
      </Wrapper>
    </section>
  );
}

export default CoreTracks;
CoreTracks