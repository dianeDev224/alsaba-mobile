


function handleDrawerMenuClick({ navigator }) {
    navigator()
}

function handleAjouterBtnPress({ navigator }) {
    navigator?.navigate("AjouterCaveaux")
}


function handleBackBtnPress({ navigator }) {
    navigator?.navigate("DrawerNavigator", { Screen: "Annonces" })
}


const souscriptionAnnonceController = {
    handleDrawerMenuClick: handleDrawerMenuClick,
    handleAjouterBtnPress: handleAjouterBtnPress,
    handleBackBtnPress: handleBackBtnPress
}

export default souscriptionAnnonceController