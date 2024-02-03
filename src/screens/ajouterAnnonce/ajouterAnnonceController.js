


function handleBackBtnPress({ navigator }) {
    navigator?.navigate("DrawerNavigator", { Screen: "ListAnnonce" })
}

const ajouterAnnonceController = {
    handleBackBtnPress: handleBackBtnPress
}

export default ajouterAnnonceController