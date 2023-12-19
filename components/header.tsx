import Image from 'next/Image'
import { useState } from 'react'
import HamburguerMenu from '../public/images/hamburguer-menu.png'
import Close from '../public/images/close.png'
import HeaderComponents from './headerComponents'
import { BiSolidHome } from 'react-icons/bi'
import { FcAbout } from 'react-icons/fc'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IoMdConstruct, IoMdPaper } from 'react-icons/io'
import { LiaCertificateSolid } from 'react-icons/lia'

export default function Header() {
    const defaultStyle = 'hidden'
    const [menu, setMenu] = useState(HamburguerMenu)
    const [sectionStyle, setSectionStyle] = useState(defaultStyle)

    function MenuOnClick() {
        setMenu(Close)
        setSectionStyle('block')

        if (menu === Close) {
            setMenu(HamburguerMenu)
            setSectionStyle(defaultStyle)
        }
    }

    return (
        <header>
            <div 
                className="
                    hidden fixed w-full justify-between p-8 px-20 text-white shadow-vShadow bg-vTransparent z-10 
                    backdrop-blur-sm
                    lg:flex
                "
            >
                <HeaderComponents className="">
                    Início
                </HeaderComponents>
                <HeaderComponents className="">
                    Sobre mim
                </HeaderComponents>
                <HeaderComponents className="">
                    Habilidades
                </HeaderComponents>
                <HeaderComponents className="">
                    Projetos
                </HeaderComponents>
                <HeaderComponents className="">
                    Certificados
                </HeaderComponents>
                <HeaderComponents 
                    className="" 
                    href="https://drive.google.com/file/d/1DWy35vNTxF5Z84zV1mAii6gRQx5KDdfE/view?usp=sharing"
                >
                    {/*Currículo*/}
                </HeaderComponents>
            </div>
            <div className="fixed end-0 lg:hidden">
                <Image 
                    className="m-5 rounded-xl w-fit p-4 bg-vTransparent shadow-vShadow" 
                    src={menu} 
                    width={7} 
                    height={7} 
                    alt="hamburger menu" 
                    onClick={MenuOnClick} 
                />
                <section className={sectionStyle}>
                    <HeaderComponents>
                        <BiSolidHome />
                    </HeaderComponents>
                    <HeaderComponents>
                        <FcAbout />
                    </HeaderComponents>
                    <HeaderComponents>
                        <AiOutlineUnorderedList />
                    </HeaderComponents>
                    <HeaderComponents>
                        <IoMdConstruct />
                    </HeaderComponents>
                    <HeaderComponents>
                        <LiaCertificateSolid />
                    </HeaderComponents>
                    <HeaderComponents 
                        href="https://drive.google.com/file/d/1DWy35vNTxF5Z84zV1mAii6gRQx5KDdfE/view?usp=sharing"
                    >
                        <IoMdPaper />
                    </HeaderComponents>
                </section>
            </div>
        </header>
    )
}