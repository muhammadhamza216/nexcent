import { MdOutlineGroupRemove } from "react-icons/md";
export default function Helpingbus() {
  return (
    <>
    <section className="bg-[#f6f7fb]">
        <div className="max-w-[1200px] m-auto p-5">
         <div className="flex sm:flex-row flex-col gap-y-5 my-5">
            <div className="sm:w-[50%] inter-uniquifier flex items-center">
                <div className="w-[24rem]">
                    <h2 className="text-4xl font-[600] text-[var(--neutralDGrey)] mb-3">Helping a local <span className="text-[var(--brandPrimary)]">business reinvent itself</span></h2>
                    <p className="text-sm text-[var(--neutralGrey)]">We reached here with our hard work and dedication</p>
                </div>
            </div>
            <div className="sm:W-[50%] flex  items-center md:ml-10">
                <div className="grid grid-cols-2 gap-10 place-items-center">
                    <div className="flex items-center gap-x-5">
                    <MdOutlineGroupRemove className="text-4xl text-[var(--brandPrimary)]"/>
                    <div className="inter-uniquifier">
                        <h2 className="text-2xl text-[var(--neutralDGrey)] font-[700]">2,245,341</h2>
                        <p className="text-[var( -neutralGrey)] text-sm">Members</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                    <MdOutlineGroupRemove className="text-4xl text-[var(--brandPrimary)]"/>
                    <div className="inter-uniquifier">
                        <h2 className="text-2xl text-[var(--neutralDGrey)] font-[700]">2,245,341</h2>
                        <p className="text-[var( -neutralGrey)] text-sm">Members</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                    <MdOutlineGroupRemove className="text-4xl text-[var(--brandPrimary)]"/>
                    <div className="inter-uniquifier">
                        <h2 className="text-2xl text-[var(--neutralDGrey)] font-[700]">2,245,341</h2>
                        <p className="text-[var( -neutralGrey)] text-sm">Members</p>
                    </div>
                    </div>
                    <div className="flex items-center gap-x-5">
                    <MdOutlineGroupRemove className="text-4xl text-[var(--brandPrimary)]"/>
                    <div className="inter-uniquifier">
                        <h2 className="text-2xl text-[var(--neutralDGrey)] font-[700]">2,245,341</h2>
                        <p className="text-[var( -neutralGrey)] text-sm">Members</p>
                    </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    </section>
    </>
  )
}
