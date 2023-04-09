import dynamic from "next/dynamic"
const HeroHeader =dynamic(()=> import("./HeroHeader"))


const HeroSection = () => {
    return (
        <>
            <div className="w-full h-auto pt-[148px] md:mb-0 mb-32">
                <HeroHeader/>
            </div>
        </>
    )
}

export default HeroSection
