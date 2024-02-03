import React from 'react'
import { QrcodeProvider } from './qrcodeContext'

export default function AppContext({ children }) {
    return (
        <QrcodeProvider>
            {children}
        </QrcodeProvider>
    )
}
