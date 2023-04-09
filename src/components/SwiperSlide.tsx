import Image from "next/image"
import ButtonStyled from "./ButtonStyled"
import { useEffect, useState } from "react"

const SwiperSlides = (props: { src?: any, title: string, text?: string, type?: string }) => {
    const [HowSecWidth,setHowSecWidth]=useState<number>(300)
    useEffect(()=>{
        window.innerWidth<600&&setHowSecWidth(100)
    },[])
    const { src, title, text, type } = props
    if (type === "how-section") {
        return (
            <>
                <div className="lg:min-h-[30rem] min-h-[240px] bg-white h-auto w-full flex-col justify-between flex gap-16 ">
                    <div className="mx-auto lg:h-[19rem] w-full h-auto lg:w-[19rem] flex justify-center items-center text-[100px] text-black">
                        <Image src={src} alt={title} width={HowSecWidth} height={HowSecWidth} />
                    </div>
                    <div className="text-lg text-center text-[#5E5E5E] w-full min-h-[146px] bg-white">
                        {text}
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="min-h-[235px]  h-auto w-full md:flex-row flex-col flex gap-16 md:px-[106px] px-[29px]">
                    <div className="md:w-3/5 w-full h-full mb-auto mt-4">
                        <Image src={src} alt={title} width={732} height={235} />
                    </div>
                    <div className="md:w-2/5 w-full h-auto flex flex-col md:gap-10 gap-5 justify-between items-start">
                        <div className="md:text-[40px] font-[700] capitalize">
                            {title}
                        </div>
                        <p className="text-[#5E5E5E] text-[18px] font-[400]">
                            {text}
                        </p>
                        <ButtonStyled text={"get started"} classes={"px-[18px] py-[8px]"} type={"primary"} handleClick={() => { console.log('click handler') }} />
                    </div>
                </div>
            </>
        )
    }
}

export default SwiperSlides
