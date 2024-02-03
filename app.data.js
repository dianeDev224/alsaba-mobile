import {
    AntDesign,
    Entypo,
    Feather,
    FontAwesome,
    Ionicons,
    Octicons,
} from '@expo/vector-icons';

export const FavorisItems = [
    {
        id: 1,
        range: 0,
        Name: "Mon Compte",
        IconName: "ios-card-outline",
        IconColor: "#fff",
        IconValue: Ionicons,
        ColorValue: "#5729c4c7",
        ColorClass: "bg-[#5729c4c7]"
    },
    {
        id: 2,
        range: 0,
        Name: "Transfert",
        IconName: "sync",
        IconColor: "#fff",
        IconValue: Octicons,
        ColorValue: "#B1A109",
        ColorClass: "bg-[#B1A109]"

    },
    {
        id: 3,
        range: 0,
        Name: "Depôt",
        IconName: "money",
        IconColor: "#fff",
        IconValue: FontAwesome,
        ColorValue: "#db4141c7",
        ColorClass: "bg-[#db4141c7]"

    },
    {
        id: 4,
        range: 0,
        Name: "Virement",
        IconName: "arrow-up-right",
        IconColor: "#fff",
        IconValue: Feather,
        ColorValue: "#238b46",
        ColorClass: "bg-[#238b46]"

    },
]

export const UserFavorisItems = [
    {
        id: 1,
        range: 1,
        Name: "Mon Compte",
        IconName: "ios-card-outline",
        IconColor: "#fff",
        IconValue: Ionicons,
        ColorValue: "#673acfc7",
        ColorClass: "bg-[#673acfc7]"

    },
    {
        id: 2,
        range: 2,
        Name: "Transfert",
        IconName: "sync",
        IconColor: "#ffffff",
        IconValue: Octicons,
        ColorValue: "#B1A109",
        ColorClass: "bg-[#B1A109]"

    },
    {
        id: 3,
        range: 3,
        Name: "Depôt",
        IconName: "money",
        IconColor: "#fff",
        IconValue: FontAwesome,
        ColorValue: "#db4141c7",
        ColorClass: "bg-[#db4141c7]"

    }
]

export const TransfertItem = [
    {
        id: 1,
        uuid: "#nav1",
        Name: "Transferts En Attentes",
        ColorClass: "bg-[#706f1e]",
        ColorValue: "#706f1e"
    },
    {
        id: 2,
        uuid: "#nav2",
        Name: "Nouveau Transfert",
        ColorClass: "bg-[#6b309b]",
        ColorValue: "#5a2983"
    },
    {
        id: 3,
        uuid: "#nav3",
        Name: "Transferts Emis",
        ColorClass: "bg-[#7a2565]",
        ColorValue: "#7a2565"
    },
    {
        id: 4,
        uuid: "#nav4",
        Name: "Transferts Validés",
        ColorClass: "bg-[#298361]",
        ColorValue: "#298361"
    },
    {
        id: 5,
        uuid: "#nav5",
        Name: "Transferts Annulés",
        ColorClass: "bg-[#833e29]",
        ColorValue: "#833e29"
    },
]
export const QRcodetItem = [
    {
        id: 1,
        uuid: "#navQrcodeGenerer",
        Name: "Les Codes QR Generés",
        ColorClass: "bg-[#706f1e]",
        ColorValue: "#706f1e"
    },
    {
        id: 2,
        uuid: "#navNouveauQrCode",
        Name: "Nouveau Code QR",
        ColorClass: "bg-[#5a2983]",
        ColorValue: "#5a2983"
    },
    {
        id: 3,
        uuid: "#navScannQRCode",
        Name: "Scanner un Code QR",
        ColorClass: "bg-[#298361]",
        ColorValue: "#298361"
    },
    {
        id: 4,
        uuid: "#navQRCodeValider",
        Name: "Code QR Valider",
        ColorClass: "bg-[#2a2dbf]",
        ColorValue: "#2a2dbf"
    }
]

export const VirementItems = [
    {
        id: 1,
        uuid: "#navNouveauVirement",
        Name: "Nouveau Virement",
        ColorClass: "bg-[#2358ad]",
        ColorValue: "#2358ad"

    },
    {
        id: 2,
        uuid: "#navVirmentsRecus",
        Name: "Virments Réçus",
        ColorClass: "bg-[#706f1e]",
        ColorValue: "#706f1e"
    },
    {
        id: 3,
        uuid: "#navVirementsEmits",
        Name: "Virements Emis",
        ColorClass: "bg-[#5a2983]",
        ColorValue: "#5a2983"
    },
    {
        id: 4,
        uuid: "#navVirementsAnnuler",
        Name: "Virments Annulers",
        ColorClass: "bg-[#af5633]",
        ColorValue: "#af5633"
    },
]

export const DepotsItem = [
    {
        id: 1,
        uuid: "#navNouveauDepot",
        Name: "Nouveau Depôt",
        ColorClass: "bg-[#2358ad]",
        ColorValue: "#2358ad"

    },
    {
        id: 2,
        uuid: "#navDepotsReçu",
        Name: "Depôts Reçus",
        ColorClass: "bg-[#7732a8]",
        ColorValue: "#7732a8"
    },
    {
        id: 3,
        uuid: "#navDepotsEffectuer",
        Name: "Depôts Effectués",
        ColorClass: "bg-[#706f1e]",
        ColorValue: "#706f1e"
    },
    {
        id: 4,
        uuid: "#navDepotsAnnuler",
        Name: "Depôts Annulés",
        ColorClass: "bg-[#ab1639]",
        ColorValue: "#ab1639"
    },

]

export const RetraitItems = [
    {
        id: 1,
        uuid: "#navNouveauReatrait",
        Name: "Nouveau Rétrait",
        ColorClass: "bg-[#2358ad]",
        ColorValue: "#2358ad"

    },
    {
        id: 2,
        uuid: "#navRetraitEffectuer",
        Name: "Retraits Effectués",
        ColorClass: "bg-[#706f1e]",
        ColorValue: "#706f1e"
    },
    {
        id: 3,
        uuid: "#navRetraitEnAttentes",
        Name: "Retraits En Attentes",
        ColorClass: "bg-[#6e1694]",
        ColorValue: "#6e1694"
    },
    {
        id: 4,
        uuid: "#navRetraitValider",
        Name: "Retraits Validés",
        ColorClass: "bg-[#168c94]",
        ColorValue: "#168c94"
    },
    {
        id: 5,
        uuid: "#navRetraitsRejeters",
        Name: "Retraits Rejetés",
        ColorClass: "bg-[#94162b]",
        ColorValue: "#94162b"
    },

]

export const CodeMoneyItems = [
    {
        id: 1,
        uuid: "#navNouveauCodeMoney",
        Name: "Nouveau CodeMoney",
        ColorClass: "bg-[#2358ad]",
        ColorValue: "#2358ad"

    },
    {
        id: 2,
        uuid: "#navCodeMoneyEmis",
        Name: "CodeMoeny Emis",
        ColorClass: "bg-[#706f1e]",
        ColorValue: "#706f1e"
    },
    {
        id: 3,
        uuid: "#navEncaisserCodeMoney",
        Name: "Encaisser un CodeMoney",
        ColorClass: "bg-[#16945b]",
        ColorValue: "#16945b"
    },
    {
        id: 4,
        uuid: "#navCodeMoneyAnnuler",
        Name: "CodeMoney Annulés",
        ColorClass: "bg-[#94161f]",
        ColorValue: "#94161f"
    },

]

export const AlsabaService = [
    {
        id: 1,
        Name: "Nous Contacter",
        IconName: "phone",
        IconValue: AntDesign
    },
    {
        id: 2,
        Name: "Localiser une Agence",
        IconName: "map-marker",
        IconValue: FontAwesome
    },
    {
        id: 3,
        Name: "Liste Des Pays",
        IconName: "globe",
        IconValue: Entypo
    },
    {
        id: 4,
        Name: "Simuler Un Transfert ",
        IconName: "sync",
        IconValue: Octicons
    }
]

export const appSecrete = "xT4EDWF9RczfvQmIIbLrN07wC9k4gz6f"