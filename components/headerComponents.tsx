import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
    className: any,
    children: ReactNode,
    href: string
}

export default function HeaderComponents({ className, children, href }: Props) {
    return (
        <div>
            <ul className={ className }>
                <Link href={ href }>
                    <li>
                        { children }
                    </li>
                </Link>
            </ul>
        </div>
    )
}