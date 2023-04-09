const SectionTabs = (props: { text: string }) => {
    return (
        <>
            <div className={` min-h-[85px] shadow-lg border  w-full whitespace-nowrap px-10 py-8 text-5 capitalize flex justify-center items-center`}>
                {props.text}
            </div>
        </>
    )
}

export default SectionTabs
