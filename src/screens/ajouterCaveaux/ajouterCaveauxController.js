


function handleBackBtnPress({ navigator }) {
    navigator?.navigate("DrawerNavigator", { Screen: "Cavaux" })
}

const ajouterCaveauxController = {
    handleBackBtnPress: handleBackBtnPress
}

export default ajouterCaveauxController