import dynamic from "next/dynamic"

const ButtonStyled = dynamic(()=>import("./ButtonStyled"))
const HeroImage =dynamic(()=>import("./HeroImage"))

const HeroHeader = () => {
    return (
        <>
            <div className="w-full h-auto bg-white">
                <section className="w-[70%] md:w-[704px]  flex flex-col justify-center items-center mx-auto ">
                    <div className=" md:text-[100px] text-[48px] font-bold text-transparent mx-auto  bg-clip-text bg-gradient-to-r from-[#4B61DC] to-[#8349FF]">
                        techvestors
                    </div>
                    <p className="text-[#8B8B8B] text-[16px] text-center">
                        Are you tired of dealing with the same old problems over and over again? Techvestors offers a fresh perspective. Our team of techies invests in the latest and greatest technology to solve your challenges once and for all.
                    </p>
                </section>
                <section className="w-full justify-center items-center mt-[40px] mb-[65px]  h-auto flex gap-[16px] mx-auto">
                    <ButtonStyled type={"primary"} classes={"px-[33px] py-[8px]"} text={"Join Us"} handleClick={() => { console.log('handleclick triggered') }} />
                    <ButtonStyled type={"secondary"} classes={"px-[33px] py-[8px]"} text={"Learn More"} handleClick={() => { console.log('handleclick triggered') }} />
                </section>
                <div>
                    <HeroImage />
                </div>
            </div>
        </>
    )
}

export default HeroHeader
