import Image from 'next/image'
import whoSection from "../assets/who-section.jpg"
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ButtonStyled =dynamic(()=>import('./ButtonStyled')) 
const WhoSection = () => {
    const [width, setWidth] = useState<number>(460)
    useEffect(() => {
        window.innerWidth < 600 && setWidth(267)
    }, [])
    return (
        <>
        <div className='h-auto w-full flex  md:flex-row  px-8 md:px-[6.5rem] flex-col-reverse md:gap-[4.5rem] gap-12 '>
            <section className='w-full h-auto flex-col flex text-lg text-[#5E5E5E] gap-6'>
                <p>
                    We cater to a diverse range of customers, including:
                </p>
                <div>
                    <li className='mt-6 md:mt-10'><span className='text-black font-bold '>Entrepreneurs:</span> Whether you&apos;re just starting out or have an established business, we provide services to help you grow your online presence and achieve your goals.</li>
                    <li className='mt-6 md:mt-10'><span className='text-black font-bold '>Small Businesses:</span> We understand the unique needs of small businesses and offer affordable solutions to help you establish and maintain your online presence.</li>
                    <li className='mt-6 md:mt-10'><span className='text-black font-bold '>Medium Businesses:</span> For medium-sized businesses looking to scale their operations, we provide reliable and scalable services to meet your growing needs.</li>
                    <li className='mt-6 md:mt-10'><span className='text-black font-bold '>Anybody with an idea:</span> If you have an idea for a website or online project, we can help you turn it into a reality with our expert services and support.</li>
                </div>
                <p>
                    No matter who you are or what your needs are, we are here to help you succeed online. Contact us today to learn more about how we can help you achieve your goals.
                </p>
            </section>
            <div className='w-auto h-auto mx-auto my-auto'>
                <Image src={whoSection} alt={""} width={width} height={width} />
            </div>
        </div>
            <ButtonStyled text={'contact us'} type={'primary'} classes={'px-5 mx-auto mt-12 py-2 mb-24'} handleClick={() => { return; }} />
        </>
    )
}

export default WhoSection
