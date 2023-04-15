import logo from "../assets/Logo/logo-white.png"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Github, Instagram, Location, Twitter, Whatsapp } from "./FooterLogo"
import { useEffect, useState } from "react"
const Footer = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false)
    }, [])
    const footerLinks = [
        {
            header: "company",
            subHeads: [
                // {
                //     title: "about",
                //     link: "/"
                // },
                {
                    title: "Enquire",
                    link: "https://fr2iizdys3b.typeform.com/to/T23kcKoM"
                },
                {
                    title: "careers",
                    link: "https://fr2iizdys3b.typeform.com/to/e4nuAjp1"
                },
                // {
                //     title: "help",
                //     link: "/"
                // }
            ]
        },
        {
            header: "services",
            subHeads: [
                {
                    title: "mobile apps",
                    link: "#solutions"
                },
                {
                    title: "web apps",
                    link: "#solutions"
                },
                {
                    title: "automation",
                    link: "#solutions"
                }
            ]
        },
        {
            header: "products",
            subHeads: [
                {
                    title: "VastrX",
                    link: "https://vastrx.co/"
                }
            ]
        },
        {
            header: "contact",
            subHeads: [
                {
                    title: "support@techvestors.com",
                    link: "/"
                },
                {
                    title: "+91 8884937987",
                    link: "/"
                }
            ]
        }
    ]
    return (
        <>
            <footer className=" overflow-hidden w-full flex flex-col justify-between text-gray-600  bg-[#4B61DC] md:px-[106px] px-8 md:py-11 py-7  min-h-[373px]">
                <div className="flex justify-evenly items-start lg:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-full text-left ">
                        {!isMobile ? <Image src={logo} alt={""} width={248} height={30} /> : <Image src={logo} alt={""} width={155} height={30} />}
                        <div className="w-full flex   md:justify-center items-center md:items-start flex-row md:flex-col">
                            <p className="mt-[31px] mb-[26px] md:text-[16px] text-xs text-white flex gap-2 items-center lg:gap-[20px]">
                                <span className=" md:h-6 md:w-6  h-5 w-5 "><Location /></span>Bengaluru,Karnataka,IN
                            </p>
                            <span className="w-full flex items-end justify-end md:justify-start lg:gap-6 gap-4 text-white">
                                <a href="https://instagram.com/techvestors?igshid=YmMyMTA2M2Y=" className="h-[4vw] w-[4vw] md:h-5 md:w-5">
                                    <Instagram />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100084005558530&mibextid=ZbWKwL" className="h-[4vw] w-[4vw] md:h-5 md:w-5">
                                    <Facebook />
                                </a>
                                <a href="https://github.com/techvestors/techvestors.tech" className="h-[4vw] w-[4vw] md:h-5 md:w-5">
                                    {/* icon for github */}
                                    <Twitter />
                                </a>
                                {/* <a href="" className="h-[4vw] w-[4vw] md:h-5 md:w-5">
                                    <Whatsapp />
                                </a> */}
                                <a href="https://discord.gg/9vvuf7YD" className="h-[4vw] w-[4vw] md:h-5 md:w-5">
                                    {/* icon for discord */}
                                    <Github />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-row-reverse justify-between gap-5 mt-10  md:mx-0 md:mt-0 md:gap-[64px]">
                        {footerLinks.map((link: any, i: number) => {
                            return (
                                <div className={`${i < 2 ? "md:block hidden" : ""}`} key={`footer${i}`}>
                                    <div className="text-white md:text-[18px] text-[14px] font-[700] capitalize mb-[22px]">
                                        {link.header}
                                    </div>
                                    <ul className="text-white capitalize text-[12px] md:text-[16px]">
                                        {link.subHeads.map((link: any, i: number) => {
                                            return (
                                                <li className="mb-[10px] md:w-auto w-auto break-words" key={`footerNav${i}`}>
                                                    <Link href={`${link.link}`}>
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="w-full text-white font-medium text-xs md:text-base  text-center">
                    © 2023 techvestors technologies private limited. all rights reserved
                </div>
            </footer>
        </>
    )
}

export default Footer
