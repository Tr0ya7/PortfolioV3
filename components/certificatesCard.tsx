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
        <ul className="p-6 bg-vBlue1000 mt-10 w-fit rounded text-left w-[240px] relative pb-16 text-sm md:w-[432px]">
            <h1 className="font-bold mb-[10px] md:text-2xl">
                {title}
            </h1>
            <div className="md:text-lg">
                <li>
                    Instituição: {institution}
                </li>
                <li>
                    Duração: {duration}
                </li>
                <li>
                    Ano de conclusão: {year}
                </li>
                <li className="text-center underline absolute left-0 right-0 bottom-7">
                    <Link href={href}>
                        Certificado
                    </Link>
                </li>
            </div>
        </ul>
    )
}