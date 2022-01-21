import * as React from 'react'
import './PElement.css'

export interface SpreadingExampleProps
    extends React.HTMLAttributes<HTMLDivElement> {
    appointment: string
    children: React.ReactNode
}

export function PElement({children, appointment}: SpreadingExampleProps) {
    return (
        <p {...appointment} className={appointment}>
            {children}
        </p>
    )
}