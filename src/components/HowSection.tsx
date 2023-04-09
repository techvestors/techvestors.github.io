
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import dynamic from "next/dynamic";
const SwiperSlides = dynamic(()=>import("./SwiperSlide")) ;
import apply from "../assets/apply.png"
import screening from "../assets/screening.png"
import analysis from "../assets/analysis.png"
import proposal from "../assets/proposal.png"
import development from "../assets/development.png"
import { useEffect, useRef, useState } from "react";
const HowSection = () => {
    const HowPaginationRef = useRef<any>(null)
    const sectionRefs = [
        {
            title: " Apply ✍🏻",
            src: apply,
            text: "To get started, simply fill out our online application form and provide us with some basic information about your project."
        },
        {
            title: "Screening 🔍",
            src: screening,
            text: "Once we receive your application, our team will review it and determine whether your project is a good fit for our services."
        },
        {
            title: "Analysis 🧠",
            src: analysis,
            text: "If your project meets our criteria, we will conduct a thorough analysis of your requirements and provide you with a detailed proposal outlining our recommended approach."
        },
        {
            title: "Proposal 🗣",
            src: proposal,
            text: "Our proposal will include a detailed breakdown of our recommended approach, along with a timeline and cost estimate for the project."
        },
        {
            title: "Development 💻",
            src: development,
            text: "Once you approve our proposal, we will begin development work on your project, keeping you informed every step of the way."
        }
    ]
    const pagination = {
        el: '.my-custom-pagination-div',
        clickable: true,
        renderBullet: function (index: any, className: any) {
            return '<pan id="' + index + '" class="' + className + '">' + sectionRefs[index].title + "</pan>";
        },
    };
    const xCoord: any[] = [

    ]
    useEffect(() => {
        for (let i = 0; i < sectionRefs.length; i++) {
            xCoord.push(document.getElementById(`${i}`)?.getBoundingClientRect().left)
        }
    }, [])
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:px-64  mb-56 mt-16">
            <div ref={HowPaginationRef} className="my-custom-pagination-div h-auto mt-12 px-8 lg:w-screen !lg:overflow-x-scroll overflow-y-hidden w-auto text-lg lg:text-2xl text-black flex whitespace-nowrap lg:flex-col lg:justify-center gap-12 lg:gap-[4.5rem] items-start cursor-pointer ">
            </div>
            <Swiper
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: true,
                }}
                effect={"fade"}
                className="h-auto w-full bg-white "
                pagination={pagination}
                modules={[Autoplay, EffectFade, Pagination]}
                onSlideChange={(slide) => { HowPaginationRef.current.scrollTo({ left: xCoord[slide.realIndex] - 80, top: 0, behavior: "smooth" }) }}
                
            >
                {sectionRefs.map((item: any, i: number) => {
                    return (
                        <SwiperSlide key={`howSecSwiper${i}`} className="bg-white px-8 md:px-0 ">
                            <SwiperSlides title={""} text={item.text} src={item.src} type={"how-section"} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default HowSection

