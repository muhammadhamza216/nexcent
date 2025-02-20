
export default function Sitefooter() {
  return (
    <>
    <section id="detail">
        <div className="max-w-[1200px] m-auto p-5">
        <div className="flex sm:flex-row flex-col gap-y-5 my-10">
            <div className="sm:w-[45%] flex justify-center">
                <img src="/img/pana.png" alt="img" width='400px'/>
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
