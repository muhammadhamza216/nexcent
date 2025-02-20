import { FaArrowRightLong } from "react-icons/fa6";
export default function Footerf() {
  return (
    <>
     <section className="bg-[#f6f7fb]">
        <div className="max-w-[1200px] m-auto p-5 flex justify-center">
          <div className="w-[35rem] flex flex-col items-center gap-y-5 my-10">
            <h2 className="text-5xl inter-uniquifier text-[var(--neutralBlack)] font-[600] text-center">Pellentesque suscipit fringilla libero eu.</h2>
            <div className="bg-[var(--brandPrimary)] w-[10rem] text-[var(--neutralWhite)] flex items-center gap-x-2 p-[12px] justify-center rounded-md">
                <button className="capitalize inter-uniquifier  font[600]">get a demo</button>
                <FaArrowRightLong />
            </div>
          </div>
        </div>
     </section> 
    </>
  )
}
