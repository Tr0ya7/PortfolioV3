import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
    href: string,
    children: ReactNode
}

export default function Contact({ href, children }: Props) {
    return (
        <div className="p-1 py-0.5 bg-vTransparent m-1 rounded border border-white md:p-1">
            <Link href={ href }>
                { children }
            </Link>
        </div>
    )
}