import dynamic from "next/dynamic";
const ButtonStyled =dynamic(()=>import("./ButtonStyled")) 

const ReadySection = () => {
    return (
        <>
            <div className=" flex flex-col lg:gap-24 gap-14 w-full justify-center  items-center lg:px-[22rem] px-8 mb-32">
                <div className="h-auto w-full text-[2.5rem] font-bold">
                    Ready to get started on your project?
                </div>
                <div className="text-[#5E5E5E] text-base font-normal">
                    <ul>
                        <li>
                            1. Simply fill out our online application form and we&apos;ll be in touch shortly to discuss your requirements in more detail.
                        </li>
                        <li>
                            2. Our application form is quick and easy to complete, and will provide us with the information we need to determine whether your project is a good fit for our services. Once we receive your application, our team will review it and get back to you within 24-48 hours to schedule a call to discuss your project in more detail.

                        </li>
                        <li>
                            3 .Don&apos;t wait any longer to turn your ideas into reality. Apply now and let us help you achieve your goals online!

                        </li>
                    </ul>
                </div>
                <ButtonStyled type={"primary"} text={"get started"} classes={"!px-5 !py-2"} handleClick={()=>{return ;}}/>
            </div>
        </>
    )
}

export default ReadySection
