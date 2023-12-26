import React from "react"
import { FaGithub } from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="bg-white text-black flex justify-center items-center p-2 text-vTextXls">
            © 2023 / Luiz Henrique Barros
            <FaGithub className="ml-2" />
        </footer>
    )
}