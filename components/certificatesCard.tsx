import Link from "next/link"

interface Props {
    title: string
    institution: string
    duration: string
    year: number
    href: string
}

export default function CertificatesCard({ title, institution, duration, year, href }: Props) {
    return (
        <ul className="p-11">
            {title}
            <li>
                Instituição: {institution}
            </li>
            <li>
                Duração: {duration}
            </li>
            <li>
                Ano de conclusão: {year}
            </li>
            <Link href={href}>
                Certificado
            </Link>
        </ul>
    )
}