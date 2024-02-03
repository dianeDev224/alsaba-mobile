import React, { createContext, useState } from "react";


export const QRcodeContext = createContext()

export function QrcodeProvider({ children }) {

    const [qrcodeInfo, setQrcodeInfo] = useState({
        montant: "",
        destinateur: {}
    })

    const [qrcodeData, setQrcodeData] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            montant: '1200FGF',
            nomDestinateur: 'amadou',
            telDestinateur: '+212648529316',
            date: "2023-06-10"
        },

    ])

    function updateQrcodeInfo(newValues) {
        setQrcodeInfo(newValues);
    }

    function addNewQrcodeData(newData) {
        setQrcodeData([
            ...qrcodeData,
            newData
        ])
    }
    function deleteQrcodeData(id) {
        qrcodeData.filter((data) => data.id === id)
    }
    function resetQrcodeInfo() {
        setQrcodeInfo(
            {
                montant: "",
                destinateur: {}
            }
        )
    }

    return (
        <QRcodeContext.Provider value={{ qrcodeInfo, qrcodeData, updateQrcodeInfo, resetQrcodeInfo, addNewQrcodeData, deleteQrcodeData }}>
            {children}
        </QRcodeContext.Provider>
    )
}