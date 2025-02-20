
export default function Main() {
  return (
    <>
    <main id="/">
        <div className="max-w-[1200px] my-10 m-auto p-5 flex sm:flex-row flex-col gap-y-5">
            <div className="sm:w-[50%]  flex flex-col justify-center inter-uniquifier">
                <h2 className="text-[50px] font-[600] text-[var(--neutralDGrey)] leading-none mb-3">Lessons and insights <span className="text-[var(--brandPrimary)]">from 8 years</span></h2>
                <p className="text-[13px] text-[var(--neutralGrey)] font-[400] mb-5">Where to grow your business as a photographer: site or social media?</p>
                <div className="w-[7rem] p-[9px] text-center bg-[var(--brandPrimary)] rounded-md">
                    <button className="capitalize font-[500] text-[var(--neutralWhite)]">register</button>
                </div>
            </div>
            <div className="sm:w-[50%]  flex justify-center items-center">
                <img src="/img/Illustration (1).png" alt="main-img" className="h-[350px]"/>
            </div>
        </div>
    </main>
    </>
  )
}
