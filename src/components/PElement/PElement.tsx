import * as React from 'react'
import './PElement.css'

export interface SpreadingExampleProps
    extends React.HTMLAttributes<HTMLElement> {
    appointment: string,
    children: React.ReactNode
}

export function PElement({children, appointment}: SpreadingExampleProps) {
    return (
        <p className={appointment}>
            {children}
        </p>
    )
}