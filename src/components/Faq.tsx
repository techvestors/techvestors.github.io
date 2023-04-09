import dynamic from 'next/dynamic'
const Accordion = dynamic(()=>import('./Accordian'))

const Faq = () => {
    const faq = [
        {
            q: "What services does Techvestors offer?",
            a: "What services does Techvestors offer?"
        },
        {
            q: "How does Techvestors work with clients?",
            a: "How does Techvestors work with clients?"
        },
        {
            q: "Is there a flat rate for all services offered by Techvestors?",
            a: "Is there a flat rate for all services offered by Techvestors?"
        },
        {
            q: "What are the benefits of working with Techvestors?",
            a: "What are the benefits of working with Techvestors?"
        },
    ]
    return (
        <div className='w-full lg:px-[19rem] flex justify-center items-center flex-col px-8 mb-60 '>
            {faq.map((item: any, i: number) => {
                return (
                    <Accordion key={`faqHome${i}`} title={item.q} content={item.a} />
                )
            })}
        </div>
    )
}

export default Faq
