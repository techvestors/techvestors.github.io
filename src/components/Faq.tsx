import dynamic from 'next/dynamic'
const Accordion = dynamic(() => import('./Accordian'))

const Faq = () => {
    const faq = [
        {
            q: "What services does techvestors offer?",
            a: "techvestors offers a comprehensive range of services including app development, web development, automation, social media marketing, CRM solutions, digital marketing, and website hosting. Our team of experts specializes in creating innovative and customized solutions to meet your business needs. From building cutting-edge apps and websites to streamlining your business processes with automation and CRM solutions, we have you covered. Our digital marketing strategies ensure maximum online visibility for your brand. We also provide reliable website hosting services to keep your website performing at its best. Contact us for top-notch technology solutions in India."
        },
        {
            q: "How does techvestors work with clients?",
            a: "techvestors works closely with clients to deliver tailored solutions for their digital needs. Our team of experts in app development, web development, automation, social media marketing, CRM solutions, digital marketing, and website hosting collaborate with clients to understand their requirements, goals, and budget. We use cutting-edge technologies to design and develop custom solutions, implement effective digital marketing strategies, and provide reliable website hosting services. Our client-centric approach ensures seamless communication, timely project updates, and superior results. Partner with Techvestors for top-notch digital services in India."
        },
        {
            q: "Is there a flat rate for all services offered by techvestors?",
            a: "At techvestors, we offer a wide range of services including app development, web development, automation, social media marketing, CRM solutions, digital marketing, and website hosting. However, as each project is unique and requires different levels of complexity, the rates for our services may vary. We provide customized solutions tailored to your specific requirements, ensuring the best value for your investment. Contact us today for a personalized quote and let us help you achieve your business goals with our expertise in cutting-edge technologies."
        },
        {
            q: "What are the benefits of working with techvestors?",
            a: "techvestors offers a wide range of services including app development, web development, automation, social media marketing, CRM solutions, digital marketing, and website hosting in India. By partnering with us, you can expect expert solutions, innovative strategies, and exceptional customer support. Our team of experienced professionals utilizes cutting-edge technologies to deliver top-quality results, helping your business thrive in the digital landscape. With our services, you can achieve enhanced online presence, streamlined operations, increased customer engagement, and measurable business growth. Choose Techvestors for reliable, result-oriented, and customized digital solutions that drive success for your business."
        },
    ]
    return (
        <div className='w-full lg:px-[19rem] flex justify-center items-center flex-col px-8 mb-60 '>
            {faq.map((item: any, i: number) => {
                return (
                    <Accordion key={`faqHome${i}`} title={item.q} content={item.a.replace("techvestors",`<span style="color:#0f305f; font-weight:bold;">techvestors</span>`)} />
                )
            })}
        </div>
    )
}

export default Faq
