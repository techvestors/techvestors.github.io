import swiperPic from "../assets/swiper-pic.png"
import swiperPic1 from "../assets/swiper-pic1.png"
import swiperPic2 from "../assets/swiper-pic2.png"
import swiperPic3 from "../assets/swiper-pic3.png"
import swiperPic4 from "../assets/swiper-pic4.png"
import swiperPic5 from "../assets/swiper-pic5.png"
import swiperPic6 from "../assets/swiper-pic6.png"
import dynamic from "next/dynamic"
const SwiperSlides =dynamic(()=>import("./SwiperSlide")) ;
import { useEffect, useRef, useState } from "react";

import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const HomeSwiper = () => {
    const whatPaginationRef = useRef<any>(null)
    const [swiperNav, setSwiper] = useState<string>("Develop Apps easily")
    const swiperArray = [
        {
            src: swiperPic,
            title: "Develop Apps easily",
            text: "Bring your app ideas to life with ease! Our mobile app development service offers top-notch quality and seamless user experience. Get started today!"
        },
        {
            src: swiperPic1,
            title: "Web Services",
            text: "Transform your ideas into reality with our expert web app development. Get started now!"
        },
        {
            src: swiperPic2,
            title: "Automate Things",
            text: "Simplify your workload and boost productivity with our task automation services. Get started today!"
        },
        {
            src: swiperPic3,
            title: "Social Media Marketing",
            text: "Maximize your social reach with our strategic social media marketing. Connect with us today!"
        },
        {
            src: swiperPic4,
            title: "CRM Solutions",
            text: "Boost your business efficiency with our powerful CRM solutions. Try it now!"
        },
        {
            src: swiperPic5,
            title: "Marketing made easy",
            text: "Unlock your business's potential with our powerful marketing strategies. Elevate your brand today"
        },
        {
            src: swiperPic6,
            title: "Hosting",
            text: "Power up your online presence with our reliable hosting solutions. Choose us now!"
        }
    ]
    // const [slideNumber, setSlide] = useState<number>(1)

    const pagination = {
        el: '.what-section-swiper',
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<span id="' + index + '" class="' + className + '">' + swiperArray[index].title + "</span>";
        },
    };
    const xCoord: any[] = [

    ]
    useEffect(() => {
        for (let i = 0; i < swiperArray.length; i++) {
            // const element = array[i];
            xCoord.push(document.getElementById(`${i}`)?.getBoundingClientRect().left)
        }
    }, [])
    return (
        <>
            <div ref={whatPaginationRef} className="what-section-swiper  h-auto lg:w-full w-screen whitespace-nowrap overflow-x-scroll lg:overflow-hidden  lg:justify-center items-center text-[18px] flex md:mb-[96px] px-[29px] py-4 gap-6 "></div>
            <div className="relative h-auto min-h-[400px] mb-32">
                <Swiper
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: true,
                    }}
                    effect={"fade"}
                    className="h-auto w-full bg-white"
                    pagination={pagination}
                    modules={[Autoplay, EffectFade, Pagination]}
                    onSlideChange={(slide) => { whatPaginationRef.current.scrollTo({ left: xCoord[slide.realIndex] - 30, top: 0, behavior: "smooth" }) }}
                >
                    {swiperArray.map((swiper: any, i: number) => {
                        return (
                            <SwiperSlide key={`homeSwiper${i}`} className="bg-white min-h-[400px] ">
                                {/* <div className={`absolute min-h-[500px] h-auto bg-white ${swiper.title == swiperNav ? "transition-opacity duration-500 delay-300 opacity-100" : "transition-opacity duration-500 opacity-0"}`}  > */}
                                <SwiperSlides text={swiper.text} title={swiper.title} src={swiper.src} />
                                {/* </div> */}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default HomeSwiper
