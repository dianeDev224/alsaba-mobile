


function handleDrawerMenuClick({ navigator }) {
    navigator()
}

function handleAjouterBtnPress({ navigator }) {
    navigator?.navigate("AnnoncesNavigator", { screen: "AjoutAnnonce" })
}

function handleCardClick({ navigator }) {
    navigator?.navigate('AnnoncesNavigator', { screen: "SouscriptionAnnonce" })
}

const listAnnonceController = {
    handleDrawerMenuClick: handleDrawerMenuClick,
    handleAjouterBtnPress: handleAjouterBtnPress,
    handleCardClick: handleCardClick
}

export default listAnnonceController