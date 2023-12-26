import Link from "next/link"
import Image from "next/image"

interface Props {
    image: string
    title: string
    description: string
    link: string
}

export default function ProjectsCard({ image, title, description, link }: Props) {
    return (
        <div className="mt-10 flex flex-col items-center p-5 bg-[#02192b] max-w-[240px] rounded">
            <Image src={image} width={176} height={176} alt={title} />
            <h2 className="text-sm mt-2 font-bold">
                {title}
            </h2>
            <p className="text-xs my-2">
                {description}
            </p>
            <Link className="text-[10px] underline" href={link}>
                {link}
            </Link>
        </div>
    )
}