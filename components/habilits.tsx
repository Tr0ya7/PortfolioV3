import { useState } from "react"
import habilitsInfo from '../json/habilitsInfo.json'
import Image from "next/image"

export default function Habilits() { 
    const [info, setInfo] = useState(['/* Selecione uma tecnologia */'])

    return (
        <section 
            className="
                max-h-[704px] bg-vBlue800 p-10 text-center justify-center lg:relative vLaptopScreen:static
                md:h-[495px] lg:text-left lg:min-h-[600px] lg:p-[6.4%]
                vLaptopGScreen:px-[204px] vLaptopGScreen:py-[170px] vLaptopGScreen:h-[704px] vLaptopGScreen:flex
            "
            id="habilits"
        >
            <ul className=" lg:mt-20 lg:max-w-[1260px] vLaptopGScreen:mt-0 vLaptopScreen:relative">
                <div className="flex flex-col lg:w-[440px] lg:absolute lg:right-2">
                    <div>
                        <li className="font text-xl md:text-4xl lg:flex">
                            Habilidades 
                        </li>
                        <li className="my-4 text-xs lg:text-base vLaptopGScreen:text-xl">
                            {info[0]}
                        </li>
                        <li 
                            className="
                                h-32 text-vTextXls 
                                vGScreen:text-[13px] md:px-20 lg:text-base lg:h-fit lg:p-0 vLaptopGScreen:text-xl
                            "
                        >
                            {info[1]}
                        </li>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start vLaptopGScreen:w-[1290px]">
                    <li 
                        className="
                            flex flex-wrap justify-center gap-x-3 gap-y-2 mt-5 max-w-xs min-h-[188px]
                            lg:gap-x-5 lg:gap-y-4 lg:max-w-[31rem] vLaptopGScreen:gap-x-9 vLaptopGScreen:max-w-[40rem]
                        "
                    >
                        {habilitsInfo.map((data) => 
                            <Image
                                className="
                                    cursor-pointer rounded bg-gray-500 opacity-50 p-1 w-12 h-fit 
                                    transition-vTransition
                                    hover:bg-gray-300 hover:opacity-100 hover:w-14
                                    vGScreen:hover:w-16 lg:w-20 lg:hover:w-24 vLaptopGScreen:w-24
                                    vLaptopGScreen:hover:w-28
                                "
                                key={data.id}
                                src={data.src} 
                                width={96} 
                                height={96} 
                                alt={data.title} 
                                onClick={() => setInfo([data.title, data.description])}
                            />
                        )}
                    </li>
                </div>
            </ul>
        </section>
    )
}