import { FaLongArrowAltRight } from "react-icons/fa";
import { post } from "./Blogdetail";
export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="max-w-[1200px] m-auto p-5">
            <div className="flex justify-center mt-10">
            <div className="w-[40rem] inter-uniquifier text-center ">
            <h2 className="text-3xl text-[var(--neutralDGrey)] font-[600] mb-3">Caring is the new marketing</h2>
            <p className="text-sm text-[var(--neutralGrey)]">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
          </div>
        </div>
          <div className="grid gap-y-25 gap-x-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 mb-20">
            {post.map((v,i)=>{
                return(
                <Card items={v} ket={i}/>
            )
            })}
            
          </div>
        </div>
      </section>
    </>
  )
}

let Card = ({items})=>{
    return(
        <div className="relative">
            <img src={`/img/${items.img}`} alt="img" width='100%' />
            <div className="w-[18rem] bg-[#f6f7fb] p-5 inter-uniquifier absolute top-50 left-4 sm:left-6 md:left-5 lg:left-10">
                <p className="font-[600] text-[var(--neutralDGrey)] text-center mb-2">{items.title}</p>
                <div className="flex justify-center items-center gap-x-2 text-[var(--brandPrimary)] font-[600]">
                    <button>Read more</button>
                    <FaLongArrowAltRight />
                </div>
            </div>
        </div>
    )
}