import Contact from './contact'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import Image from 'next/image'
import { HiOutlineMail } from "react-icons/hi"
import { FaWhatsapp } from "react-icons/fa"

export default function ContactMe() {
    return (
        <section 
            className="
                min-h-screen bg-gradient-to-br from-vBlue via-vBlue800 to-vBlue950 flex justify-center content-center 
                flex-wrap
            "
            id="contactMe"
        >
            <div className="gap-24 content-center lg:flex">
                <div>
                    <div 
                        className="h-fit text-4xl font-bold font-saira md:text-6xl lg:mt-12 vLaptopGScreen:text-[5rem]"
                    >
                        Luiz Henrique
                    </div>
                    <div className="text-xl font-handjet md:text-3xl vLaptopGScreen:text-[2.5rem]">
                        Desenvolvedor Fullstack
                    </div>
                    <div className="flex">
                        <Contact href="https://www.linkedin.com/in/luiz-henrique-barros/">
                            <BiLogoLinkedin className="contact" />
                        </Contact>
                        <Contact href="https://github.com/Tr0ya7">
                            <FiGithub className="contact" />
                        </Contact>
                        <Contact href="mailto:DevLuizHBarros@proton.me">
                            <HiOutlineMail className="contact" />
                        </Contact>
                        <Contact href="https://wa.me/14997692681">
                            <FaWhatsapp className="contact" />
                        </Contact>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image 
                        className="w-28 absolute bottom-10 animate-floating lg:w-vW lg:static"
                        src="/images/next-js.png" 
                        width={450} 
                        height={250} 
                        alt="stack" 
                    />
                </div>
            </div>
        </section>
    )
}