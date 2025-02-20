import { HiOutlineUserGroup } from "react-icons/hi";
import { BsBuildingsFill } from "react-icons/bs";
import { PiHandsClappingFill } from "react-icons/pi";
export default function Community() {
  return (
    <>
    <section id="community">
        <div className="max-w-[1200px] m-auto p-5">
            <div className="flex flex-col items-center">
            <div className="sm:w-[28rem] text-center inter-uniquifier font-[600] mb-2">
            <h2 className="text-3xl text-[var(--neutralDGrey)]">Manage your entire community in a single system</h2>
         </div>
           <p className="text-sm text-[var(--neutralGrey)]">Who is Nextcent suitable for?
         </p>
            </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-y-10 my-14">
           <div className="sm:w-[20rem] inter-uniquifier relative flex flex-col gap-y-3 items-center shadow-md p-5">
           <div className="w-7 h-7 bg-green-200 rounded-custom"></div>
           <HiOutlineUserGroup className="text-4xl absolute top-1 right-38"/>
            <h2 className="text-3xl font-[700] text-[var(--neutralDGrey)] text-center">Membership Organisations</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
           </div>
           <div className="sm:w-[20rem] inter-uniquifier relative flex flex-col gap-y-3 items-center shadow-md p-5">
           <div className="w-7 h-7 bg-green-200 rounded-custom"></div>
           <BsBuildingsFill className="text-4xl absolute top-2 right-38"/>
            <h2 className="text-3xl font-[700] text-[var(--neutralDGrey)] text-center">National Associations</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
           </div>
           <div className="sm:w-[20rem] inter-uniquifier relative flex flex-col gap-y-3 items-center shadow-md p-5">
           <div className="w-7 h-7 bg-green-200 rounded-custom"></div>
           <PiHandsClappingFill className="text-4xl absolute top-2 right-37"/>
            <h2 className="text-3xl font-[700] text-[var(--neutralDGrey)] text-center">Clubs And Groups</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
           </div>
        </div>

        <div className="flex sm:flex-row flex-col gap-y-5 mb-10">
            <div className="sm:w-[45%] flex justify-center">
                <img src="/img/Group 242.png" alt="img" width='400px'/>
            </div>
            <div className="sm:w-[55%] flex justify-center items-center">
                <div className="inter-uniquifier w-[30rem]">
                    <h2 className="text-4xl mb-3 text-[var(--neutralDGrey)] font-[600]">The unseen of spending three years at Pixelgrade</h2>
                    <p className="mb-5 text-sm text-[var(--neutralGrey)]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <div className="w-[7rem] p-[9px] text-center bg-[var(--brandPrimary)] rounded-md">
                    <button className="capitalize font-[500] text-[var(--neutralWhite)]">learn more</button>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}


