import { ReactNode } from 'react'
import Link from 'next/Link'

interface Props {
    className: any,
    children: ReactNode,
    href: string
}

export default function HeaderComponents({ 
    className = 'rounded-xl w-fit p-2 bg-vTransparent shadow-vShadow mx-7 mt-2', children, href = "/"
}: Props) {
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