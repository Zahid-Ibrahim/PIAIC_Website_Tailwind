import Wrapper from "../shared/Wrapper"
import Image from "next/image"
import outcome from "@/assets/images/outcome-poster.webp"

const outcomePoints = ["Product Ownership","FreeLancing","Global Marketing by Panaverse DAO","Boosting Economy"]
const ProgramOutcome = () => {  
return (
<section className="mt-16 md:mt-28">
    <Wrapper>
        <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
            <div>
                <Image src={outcome} alt="program outcome" />
                </div> 
<div className="flex-1">
    <h2 className="font-bold text-5xl">The Outcome for Participants of the Program</h2>
    <h3 className="mt-4 text-slate-400 text-lg">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</h3>  

<div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
    {outcomePoints.map((item,i) => (
        <div key ={i} className="flex items-center gap-x-2">
          
          <svg className="flex-shrink-0"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/> </svg>
            <h3 className=" font-medium text-lg">{item}</h3>
            </div>
    ))}
</div>
</div>
        </div>
    </Wrapper>

    </section>
    )
}
export default ProgramOutcome
