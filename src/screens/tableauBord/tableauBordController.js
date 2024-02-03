


function handleDrawerMenuClick({ navigator }) {
    navigator()
}

function handleAjouterBtnPress({ navigator }) {
    navigator?.navigate("AjouterCaveaux")
}


const tableauBordController = {
    handleDrawerMenuClick: handleDrawerMenuClick,
    handleAjouterBtnPress: handleAjouterBtnPress,
}

export default tableauBordController