
import { useState } from "react";

const Accordion = (props: { title: string, content: string }) => {
    const { title, content } = props
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-y border-gray-200 rounded-md w-full">
            <div
                className="flex items-center justify-between py-8 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h3 className="md:text-xl text-sm ">{title}</h3>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    {...props}
                >
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
            </div>
            {isOpen && <div className="py-6 border-t md:text-xl text-sm border-gray-200 text-[#5E5E5E]  " dangerouslySetInnerHTML={{__html:content}}></div>}
        </div>
    );
};

export default Accordion;
