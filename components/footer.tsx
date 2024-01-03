import React from "react"
import { FaGithub } from "react-icons/fa6"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-white text-black flex justify-center items-center p-2 text-vTextXls">
            © 2023 / Luiz Henrique Barros
            <Link href="https://github.com/Tr0ya7">
                <FaGithub className="ml-2" />
            </Link>
        </footer>
    )
}