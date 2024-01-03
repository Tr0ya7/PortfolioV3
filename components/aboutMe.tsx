import Image from 'next/image'

export default function AboutMe() { 
    return (
        <section 
            className="
                max-h-[648px] bg-vBlue950 items-center 
                md:flex md:gap-x-vGap md:p-[10%] lg:gap-x-[13%] vLaptopGScreen:p-[15%]
            "
            id="aboutMe"
        >
            <div className="vLaptopGScreen:max-w-[250px]">
                <Image 
                    className="hidden lg:flex vLaptopGScreen:w-[2000px]" 
                    src="/images/about.png" 
                    width={1500} 
                    height={1500} 
                    alt="about" 
                />
            </div>
            <ul className="p-10 md:leading-7 md:p-0">
                <li className="text-xl text-center mb-1.5 vGScreen:pt-10 md:text-3xl md:pt-0">
                    Sobre mim
                </li>
                <div 
                    className="
                        text-sm 
                        vMScreen:text-center vGScreen:text-left md:text-[18px] md:leading-[30px] 
                        vLaptopGScreen:text-[22px]
                    "
                >
                    <li className="mb-2.5">
                        Sou uma pessoa apaixonada por programação e tecnologia de modo geral. Obtive meu primeiro 
                        contato com a área com o ensino médio e técnico e logo nele comecei a trabalhar na área, 
                        concluindo meu projeto de conclusão de curso fazendo uma venda em conjunto com colegas de um 
                        site para uma barbearia local da cidade.
                    </li>
                    <li>
                        E logo após a essa venda me encontro empregado a uma software house, que presta serviços a de
                        ERP a diversas empresas de diversos ramos de vários estados do Brasil. E que hoje sendo o único
                        programador com conhecimentos fullstack contratado por ela, pude fazer vários projetos web do 
                        zero usando as técnilogias escolhidas por mim, além de manter em conjunto um sistema em 
                        Delphi 10 e Delphi 7.
                    </li>
                </div>
            </ul>
        </section>
    )
}