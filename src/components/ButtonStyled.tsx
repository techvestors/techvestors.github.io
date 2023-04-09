

const ButtonStyled = (props: { type: string, classes: string, handleClick: any, text: string }) => {
    const { type, classes, handleClick, text } = props
    if (type == "primary") {
        return (
            <>
                <button className={`whitespace-nowrap rounded-full bg-[#4B61DC] px-[33px] py-[5px] flex items-center justify-center text-[14px] font-[700]  text-[#ffffff] border-2 border-[#4B61DC] capitalize w-auto ${classes}`} onClick={handleClick} >
                    {text}
                </button>
            </>
        )
    }
    else {
        return (
            <button className={`whitespace-nowrap rounded-full bg-[#FFFFFF] px-[33px] flex items-center justify-center text-[14px] font-[700]  text-[#4B61DC] border-2 border-[#4B61DC] capitalize w-auto ${classes}`} onClick={handleClick} >
                {text}
            </button>
        )
    }
}

export default ButtonStyled
