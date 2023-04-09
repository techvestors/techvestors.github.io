import dynamic from 'next/dynamic'
const SectionTabs =dynamic(()=>import('./SectionTabs')) 

const WhySubSection = () => {
    const wsArray = [
        "tailor made development 🪡",
        "technological ecosystem 👨🏻‍💻",
        "cost efficiency 💰",
        "time saving ⏳",
        "continuous enhancement ⬆️",
        "staying upto-date 📅"
    ]
    return (
        <div className='w-full md:px-[121px] h-auto flex justify-center flex-col md:gap-8 gap-5 mb-28 md:mb-64 items-center '>
            <div className='flex md:gap-5 flex-col lg:flex-row'>
                {wsArray.map((item: any, i: number) => {
                    if (i < 4) {
                        return (
                            <SectionTabs key={`whySection${i}`} text={item} />
                        )
                    }
                })}
            </div>
            <div className='flex md:gap-5 flex-col lg:flex-row'>
                {wsArray.map((item: any, i: number) => {
                    if (i >= 4) {
                        return (
                            <SectionTabs key={`whySection${i}`} text={item} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default WhySubSection
