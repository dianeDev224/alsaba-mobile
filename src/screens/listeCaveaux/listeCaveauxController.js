


function handleDrawerMenuClick({ navigator }) {
    navigator()
}

function handleAjouterBtnPress({ navigator }) {
    navigator?.navigate("AjouterCaveaux")
}


const listCaveauxController = {
    handleDrawerMenuClick: handleDrawerMenuClick,
    handleAjouterBtnPress: handleAjouterBtnPress,
}

export default listCaveauxController