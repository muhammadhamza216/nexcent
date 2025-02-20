import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function Header() {
  let [menu, setmenu] = useState(false);
  return (
    <>
    {/* Start desktop menu */}
    <header className="relative">
      <div className="max-w-[1200px] m-auto p-5 flex items-center justify-between">
        <div>
          <img src="/img/Logo1.png" alt="website-logo" className="w-[130px]"/>
        </div>
        <div className="sm:block hidden">
        <div className="flex items-center gap-x-5">
          <ul className="flex gap-x-5 inter-uniquifier font-[500] text-[var(--neutralDGrey)] text-[1.1rem]">
            <li><a href="/">Home</a></li>
            <li><a href="/#features">Features</a></li>
            <li><a href="/#community">Community</a></li>
            <li><a href="/#detail">Blog</a></li>
            <li><a href="/#blog">Pricing</a></li>
          </ul>
          <div className="flex gap-x-2 items-center inter-uniquifier font-[500] text-[var(--neutralWhite)] text-[1.1rem] bg-[var(--brandPrimary)] p-3 ]">
          <button>Register Now</button>
          <FaArrowRightLong />
        </div>
        </div>
        </div>   
        <div className="text-2xl sm:hidden block">
        <IoMdMenu onClick={()=>setmenu(true)}/>
        </div> 
      </div>
    </header>
    {/* end desktop menu */}

    {/* Start mobile menu */}
     <header className={`absolute w-[100%]  top-0 -left-150 ${menu ? 'activeMenu' : ''}`}>
      <div className="p-5 bg-[var(--neutralWhite)] h-screen sm:hidden block">
       <div className="flex items-center justify-between mb-10">
        <img src="/img/Logo1.png" alt="website-logo" className="w-[130px]"/>
        <div>
        <RxCross2 className="text-xl" onClick={()=>setmenu(false)}/>
        </div>
       </div>
       <div>
        <ul className="flex flex-col gap-y-2 inter-uniquifier font-[500] text-[var(--neutralDGrey)] text-[1.1rem] mb-10">
        <li><a href="/">Home</a></li>
        <li><a href="/#features">Features</a></li>
        <li><a href="/#community">Community</a></li>
        <li><a href="/#detail">Blog</a></li>
        <li><a href="/#blog">Pricing</a></li>
        </ul>
       </div>
       <div className="flex w-[11rem] justify-center gap-x-2 items-center inter-uniquifier font-[500] text-[var(--neutralWhite)] text-[1.1rem] bg-[var(--brandPrimary)] p-3 ]">
          <button>Register Now</button>
          <FaArrowRightLong />
        </div>
      </div>
     </header>
    {/* end mobile menu */}
    </>
  )
}
