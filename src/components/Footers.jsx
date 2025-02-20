import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
export default function Footers() {
  return (
    <>
     <section className="bg-[var(--neutralBlack)]">
        <div className="max-w-[1200px] m-auto p-5">
         <div className="grid gap-y-1 sm:grid-cols-[30%_20%_20%_30%]">
            <div className="p-2 space-y-7 inter-uniquifier">
                <img src="/img/Logo.png" alt="footer-logo" />
                <div>
                <p className="text-[var(--neutralSilver)] mb-2">Copyright © 2020 Landify UI Kit.</p>
                <p className="text-[var(--neutralSilver)]">All rights reserved</p>
                </div>
                <div className="text-[var(--neutralSilver)] flex gap-x-3">
                   <div className="w-[2rem] p-2 bg-[#3d464d] rounded-full">
                   <FaInstagramSquare />
                   </div>
                   <div className="w-[2rem] p-2 bg-[#3d464d] rounded-full">
                   <FaTwitter />
                   </div>
                   <div className="w-[2rem] p-2 bg-[#3d464d] rounded-full">
                   <IoLogoYoutube />
                   </div>
                   <div className="w-[2rem] p-2 bg-[#3d464d] rounded-full">
                   <FaFacebookF />
                   </div>
                </div>
            </div>
            <div className="p-2 inter-uniquifier text-[var(--neutralSilver)] space-y-2">
                <h2 className="text-2xl text-[var(--neutralWhite)] font-[600]">Company</h2>
                 <p>About us</p>
                 <p>Blog</p>
                 <p>Contact us</p>
                 <p>Pricing</p>
                 <p>Testimonials</p>
            </div>
            <div className="p-2 inter-uniquifier text-[var(--neutralSilver)] space-y-2">
                 <h2 className="text-2xl text-[var(--neutralWhite)] font-[600]">Support</h2>
                 <p>Help center</p>
                 <p>Terms of service</p>
                 <p>Legal</p>
                 <p>Privacy policy</p>
                 <p>Status</p>
            </div>
            <div className="inter-uniquifier p-2">
                <h2 className="text-2xl text-[var(--neutralWhite)] font-[600] mb-5">Stay up to date</h2>
                <div className="flex items-center justify-center gap-x-1 bg-[#525b60] p-2 rounded-full w-[18rem]">
                    <input type="text" className="p-1 capitalize focus:outline-none text-[var(--neutralSilver)]" placeholder="your email address"/><IoIosSend className="text-2xl text-[var(--neutralWhite)] cursor-pointer"/>
                </div>
            </div>
         </div>
        </div>
    </section> 
    </>
  )
}
