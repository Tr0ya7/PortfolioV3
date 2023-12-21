import { useState } from "react"
import habilitsInfo from '../json/habilitsInfo.json'
import Image from "next/image"

export default function Habilits() { 
    const [info, setInfo] = useState(['/* Selecione uma tecnologia */'])

    return ( //quando chegar em notebook = mudar como estão os elementos mostrados na tela
        <section 
            className="
                max-h-[704px] bg-vBlue800 p-10 text-center 
                md:h-[495px] lg:text-left lg:min-h-[600px] lg:p-[6.4%]
                vLaptopGScreen:p-[160px] vLaptopGScreen:h-[704px]
            "
        > {/*ir diminuindo o padding*/}
            <ul className="relative lg:mt-20 vLaptopGScreen:mt-9"> {/*alinhar ao meio em todas as telas*/}
                <div className="flex flex-col lg:w-[440px] lg:absolute lg:right-0"> {/*ir encolhendo o padding*/}
                    <div>
                        <li className="font text-2xl lg:flex lg:text-4xl">
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
                        > {/*md:text-base md:max-w-[75%]*/}
                            {info[1]}
                        </li>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                    <li 
                        className="
                            flex flex-wrap justify-center gap-x-3 gap-y-2 mt-5 max-w-xs min-h-[188px]
                            lg:gap-x-5 lg:gap-y-4 lg:max-w-[50%] vLaptopGScreen:gap-x-9 vLaptopGScreen:max-w-[55%]
                        "
                    >
                        {habilitsInfo.map((data) => 
                            <Image
                                className="
                                    cursor-pointer rounded-xl bg-gray-500 opacity-50 p-1 w-12 h-fit 
                                    transition-vTransition
                                    hover:bg-gray-300 hover:opacity-100 hover:w-14
                                    vGScreen:w-14 vGScreen:hover:w-16 lg:w-20 lg:hover:w-24 vLaptopGScreen:w-24 
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