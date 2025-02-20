import { Element } from "react-scroll";
export default function Ourclient() {
  return (
    <>
    <Element id="features">
        <div className="max-w-[1200px] m-auto p-5">
            <div className="flex flex-col items-center inter-uniquifier">
                <h2 className="text-3xl font-[600] text-[var(--neutralDGrey)] mb-2">Our Clients</h2>
                <p className="text-sm text-[var(--neutralGrey)]">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="flex justify-between my-10">
              <img src="/img/Logo (1).png" alt="img" />
              <img src="/img/Logo (2).png" alt="img" />
              <img src="/img/Logo (3).png" alt="img" />
              <img src="/img/Logo (4).png" alt="img" />
              <img src="/img/Vector (3).png" alt="img" />
              <img src="/img/Logo (5).png" alt="img" />
              <img src="/img/Logo (6).png" alt="img" />
            </div>
        </div>
    </Element>
    </>
  )
}

