import { FaLongArrowAltRight } from "react-icons/fa";
export default function Timsmith() {
  return (
    <>
     <section className="bg-[#f6f7fb]">
        <div className="max-w-[1200px] m-auto p-5">
        <div className="flex sm:flex-row flex-col gap-y-5 my-10">
            <div className="sm:w-[40%] flex justify-center">
                <img src="/img/image 9.png" alt="img" width='400px'/>
            </div>
            <div className="sm:w-[60%] flex justify-center items-center">
                <div className="inter-uniquifier w-[40rem]">
                    <p className="mb-5 text-sm text-[var(--neutralDGrey)]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h2 className="text-2xl text-[var(--brandPrimary)] font-[600]">Tim Smith</h2>
                    <p className="mb-5 text-sm text-[var(--neutralGrey)]">British Dragon Boat Racing Association</p>
                    <div className="flex justify-between">
                    <img src="/img/Logo (7).png" alt="img" width='35px' />
                    <img src="/img/Logo (2).png" alt="img" width='35px' />
                    <img src="/img/Logo (4).png" alt="img" width='35px' />
                    <img src="/img/Logo (5).png" alt="img" width='35px' />
                    <img src="/img/Logo (6).png" alt="img" width='35px' />
                    <img src="/img/Logo (1).png" alt="img" width='35px' />
                    <div className="flex items-center gap-x-1.5 text-[var(--brandPrimary)] font-[600]">
                    <a href="">Meet all customers</a>
                    <FaLongArrowAltRight />
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
