import Image from 'next/Image'

export default function AboutMe() { 
    return (
        <section className="max-h-[648px] bg-vBlue950 items-center md:flex md:gap-x-vGap md:p-[10%]">
            <div>
                <Image className="hidden lg:flex" src="/images/about.png" width={1500} height={1500} alt="about" />
            </div>
            <ul className="p-10 md:leading-7 md:p-0">
                <li className="text-xl text-center mb-1.5 vGScreen:pt-10 md:text-3xl md:pt-0">
                    Sobre mim
                </li>
                <div className="text-sm vMScreen:text-center vGScreen:text-left md:text-[18px] md:leading-[30px]">
                    <li className="mb-2.5">
                        Sou uma pessoa apaixonada por programação e tecnologia de modo geral. Minha jornada me conduziu 
                        por um profundo envolvimento com a manutenção de diversos bancos de dados, também vindo a 
                        explorar suas interligações em softwares empresariais e sites. Possuo também uma singela 
                        experiência na área web, vindo a trabalhar com o uso dela no meu recente trabalho (mesmo não 
                        pertencendo a essa área a empresa em questão) de maneira como para uso comercial/profissional, 
                        vendo que já desenvolvi em conjunto com mais um programador PHP um site que foi vendido.
                    </li>
                    <li>
                        Sou um profissional que por experiência acabei adquirindo muito tato as requisições e desejos 
                        do consumidor final, pela experiência adquirida como programador Front-end, Delphi e suporte no 
                        ERP da minha última empresa.
                    </li>
                </div>
            </ul>
        </section>
    )
}