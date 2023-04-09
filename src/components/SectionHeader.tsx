
const SectionHeader = (props: { bgText: String, foreText: string }) => {
    const { bgText, foreText } = props
    return (
        <>
            <div className='w-full flex justify-center items-center h-fit  relative'>
                <div className='stroke-text uppercase text-white text-[104px] md:text-[200px] font-[700] h-fit  w-1/3 flex justify-center items-center '>
                    {bgText}
                </div>
                <div className='absolute text-[32px] md:text-[40px] capitalize font-[700] bottom-[14%] md:bottom-[18%]'>
                    {foreText}
                </div>
            </div>
        </>
    )
}

export default SectionHeader
