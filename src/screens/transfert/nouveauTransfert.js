import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { styled } from 'nativewind';
import {
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import DropDown from '../../components/inputs/dropDown';
import InputField from '../../components/inputs/InputField';
import ConfirmationNouveauTransfert
  from '../../components/popup/transfertConofirmation/confirmationNouveauTransfert';

function NouveauTransfert() {

    const [transfertType, setTransfertType] = useState()
    const [showValiderPopup, setShowValiderPopup] = useState(false)
    const [innerNavigation, setInnerNavigation] = useState({
        showInfoExp: false,
        showInfoDest: false,
        showMontantFrais: false,
        activateForms: false
    })
    const [clickFrais, setClickFrais] = useState({
        frais: true,
        sansFrais: false
    })
    let fraisType = {
        frais: true,
        sansFrais: false
    }
    const [expediteur, setEpediteur] = useState();
    const nomExpRef = useRef();
    const prenomExpRef = useRef();
    const telExpRef = useRef();
    const nomDestRef = useRef();
    const prenomDestRef = useRef();
    const telDestRef = useRef();
    const paysDestRef = useRef();
    const villeDestRef = useRef();
    const montantRef = useRef();
    const moyenReceptionRef = useRef();
    const typeTransfertRef = useRef();
    const [formData, setFormData] = useState({
        nomExp: "",
        prenomExp: "",
        telExp: "",
        nomDest: "",
        prenomDest: "",
        telDest: "",
        paysDest: "",
        villeDest: "",
        montant: "",
        moyenReception: "",
        typeTransfert: "",
    })
    const StyledView = styled(View)
    const windowSize = useWindowDimensions();
    const styleSheet = styleGenerator({ windowHeight: windowSize.height, windowWidth: windowSize.width })
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const data = ["tranfert nationnal", "transfert internationnal"]
    const paysData = ["Guinnée", "Senegal"]
    const villeData = ["Conakry", "Kindia"]
    const moyenReception = ["Orange", "Espèce", "MoMo"]
    const caveaux = ["Alsaba Cash", "MoMo", "Orange Money"]

    useEffect(() => {
        console.log("current value selected : ", montantRef.current?.value)
    }, [montantRef.current?.value])

    function handletransfertType(newValue) {
        setInnerNavigation({
            ...innerNavigation,
            showInfoExp: true
        })
        setTransfertType(newValue)
    }




    function handleNavigation(currentMenu, type) {
        if (type === "suiv") {
            switch (currentMenu) {
                case "InfoExp": {
                    setInnerNavigation({
                        ...innerNavigation,
                        showInfoExp: false,
                        showInfoDest: true,
                        showMontantFrais: false,
                    })
                    break;
                }
                case "InfoDest": {
                    setInnerNavigation({
                        ...innerNavigation,
                        showInfoExp: false,
                        showInfoDest: false,
                        showMontantFrais: true,
                    })
                    break;
                }
                case "MontantFrais": {
                    setShowValiderPopup(true)
                    break;
                }
            }
        }
        else if (type === "prev") {
            switch (currentMenu) {
                case "InfoDest": {
                    setInnerNavigation({
                        ...innerNavigation,
                        showInfoExp: true,
                        showInfoDest: false,
                        showMontantFrais: false,
                    })
                    break;
                }

                case "MontantFrais": {
                    setInnerNavigation({
                        ...innerNavigation,
                        showInfoExp: false,
                        showInfoDest: true,
                        showMontantFrais: false,
                    })
                    break;
                }
            }
        }
    }

    function handleFraisClick() {
        setClickFrais({
            frais: !clickFrais.frais,
            sansFrais: !clickFrais.sansFrais
        })
    }

    return (
        <>
            <StyledView style={{ width: SCREEN_WIDTH, backgroundColor: "#e0cdee", flex: 1 }}>
                <Pressable className="flex flex-col item-center justify-center w-full" >
                    <Text className={`w-full font-bold text-[20px] italic text-[#5a2983] text-center my-2`}>Nouveau Transfert</Text>
                    <StyledView className="flex flex-row w-full justify-center items-center mb-3">
                        <DropDown item={data} popupContainerWidth={"w-[100px]"} color={"#5a2983"} setValue={handletransfertType} value={transfertType} defaultButtonText="type de transfert" width={200} componentRef={typeTransfertRef} />
                    </StyledView>

                    <StyledView className="flex flex-row w-full h-[100px] items-center justify-center p-1 my-2">
                        <StepMenu activate={innerNavigation.showInfoExp} tiTle={"Info Expediteur"} btnType={"InfoExpediteur"} />
                        <StyledView className="flex flex-row w-[50px] h-[40px]  relative items-center justify-center">
                            <StyledView className="flex flex-row absolute ">
                                <MaterialCommunityIcons name="chevron-triple-right" size={45} color="black" />
                            </StyledView>
                        </StyledView>
                        <StepMenu activate={innerNavigation.showInfoDest} tiTle={"Info Destinateur"} btnType={"InfoDestinateur"} />
                        <StyledView className="flex flex-row w-[50px] h-[40px]  relative items-center justify-center">
                            <StyledView className="flex flex-row absolute ">
                                <MaterialCommunityIcons name="chevron-triple-right" size={45} color="black" />
                            </StyledView>
                        </StyledView>
                        <StepMenu activate={innerNavigation.showMontantFrais} tiTle={"Montant & Frais"} btnType={"MontantFrais"} />
                    </StyledView>
                    {showValiderPopup && <ConfirmationNouveauTransfert isModalVisible={showValiderPopup} setModalVisible={setShowValiderPopup} />}
                    <StyledView className="flex flex-col items-center w-full justify-center space-y-4 ">
                        {(innerNavigation.showInfoExp || typeTransfertRef.current?.value) && <>

                            <StyledView className="flex flex-row space-x-3 items-center">
                                <StyledView>
                                    <InputField headerText={"Nom Exp"} headerColorClass={'bg-[#5a2983]'} placeholder={"ex : 3000"} key={"abc"} componentref={nomExpRef} />
                                </StyledView>
                                <StyledView>
                                    <InputField headerText={"Prenom Exp"} headerColorClass={'bg-[#5a2983]'} placeholder={"ex : 3000"} key={"abxs"} componentref={prenomExpRef} />
                                </StyledView>
                            </StyledView>
                            <InputField keyboardType={'numeric'} headerText={"Tel Exp"} headerColorClass={'bg-[#5a2983]'} placeholder={"ex : 3000"} key={"abd"} componentref={telExpRef} />
                            <FooterButton showMiddle={false} handleClick={handleNavigation} currentMenu="InfoExp" />
                        </>
                        }
                        {innerNavigation.showInfoDest && <>
                            {(transfertType == data[1]) && <StyledView className="flex flex-row justify-between my-2">
                                <StyledView className="flex flex-col mr-[50px]  space-y-3 items-center justify-between">
                                    <DropDown item={paysData} popupContainerWidth={"w-[40px]"} color={innerNavigation.showInfoDest ? "#5a2983" : "#947ca5"} defaultButtonText="Pays Dest" width={150} key={"&dhs"} componentRef={paysDestRef} />
                                </StyledView>
                                <StyledView className="flex flex-col  space-y-3 items-center justify-between">
                                    <DropDown item={villeData} popupContainerWidth={"w-[40px]"} color={innerNavigation.showInfoDest ? "#5a2983" : "#947ca5"} defaultButtonText="Ville Dest" width={150} key={"&sa"} componentRef={villeDestRef} />
                                </StyledView>
                            </StyledView>}
                            <StyledView className="flex flex-row space-x-3 items-center my-2">
                                <StyledView>
                                    <InputField headerText={"Nom Dest"} headerColorClass={innerNavigation.showInfoDest ? 'bg-[#5a2983]' : "bg-[#947ca5]"} placeholder={"ex : 3000"} key={"abc"} componentref={nomDestRef} />
                                </StyledView>
                                <StyledView>
                                    <InputField headerText={"Prenom Dest"} headerColorClass={innerNavigation.showInfoDest ? 'bg-[#5a2983]' : "bg-[#947ca5]"} placeholder={"ex : 3000"} key={"abxs"} componentref={prenomDestRef} />
                                </StyledView>
                            </StyledView>
                            <StyledView className="my-2">
                                <InputField keyboardType={'numeric'} headerText={"Tel Dest"} headerColorClass={innerNavigation.showInfoDest ? 'bg-[#5a2983]' : "bg-[#947ca5]"} placeholder={"ex : +212648529316"} key={"abn"} componentref={telDestRef} />
                            </StyledView>
                            <FooterButton currentMenu="InfoDest" handleClick={handleNavigation} />
                        </>}
                        {innerNavigation.showMontantFrais && <>
                            <StyledView className={`my-2  flex flex-row justify-between w-full p-1 `}>
                                <InputField keyboardType={'numeric'} headerText={"Montant"} headerColorClass={'bg-[#5a2983]'} placeholder={"ex : +212648529316"} key={"abg"} componentref={montantRef} />
                                <StyledView className="flex flex-col mt-3 justify-between">
                                    <StyledView className="flex flex-row  items-center ">
                                        <ButtonPille handleFraisClick={handleFraisClick} clickFrais={clickFrais.frais} />
                                        <Text className="ml-1 font-bold">Frais Inclus</Text>
                                    </StyledView>
                                    <StyledView className="flex flex-row items-center">
                                        <ButtonPille handleFraisClick={handleFraisClick} clickFrais={clickFrais.sansFrais} />
                                        <Text className="font-bold ml-1">Frais Non Inclus</Text>
                                    </StyledView>

                                </StyledView>
                            </StyledView>

                            <StyledView className="flex flex-col  space-y-3 items-center justify-between my-2">
                                <DropDown item={moyenReception} popupContainerWidth={"w-[40px]"} color={"#5a2983"} defaultButtonText="Moyen De Reception" width={230} key={"&ss"} componentRef={moyenReceptionRef} />
                            </StyledView>

                            <StyledView className="flex flex-col  space-y-3 items-center justify-between my-2">
                                <DropDown item={caveaux} popupContainerWidth={"w-[40px]"} color={"#5a2983"} defaultButtonText="Caveaux Destination" width={230} key={"&ss"} componentRef={moyenReceptionRef} />
                            </StyledView>
                            <LinearGradient
                                colors={['#956eba', '#5a2983', '#956eba']}
                                className={`${(montantRef.current?.value !== "" && montantRef.current?.value) ? 'flex' : 'hidden'} flex-col w-[96%] p-2  rounded-2xl`}>
                                <Text className="text-center font-bold text-xl text-[#fff]">Recap</Text>
                                <StyledView className="flex flex-row items-center">
                                    <Text className="font-bold text-[#fff] text-base">Montant : </Text>
                                    <Text className="font-bold text-[#fff] text-base">{clickFrais.frais ? montantRef.current?.value * 0.9 : montantRef.current?.value}</Text>
                                </StyledView>
                                <StyledView className="flex flex-row items-center">
                                    <Text className="font-bold text-[#fff] text-base">Frais Alsaba : </Text>
                                    <Text className="font-bold text-[#fff] text-base">{montantRef.current?.value * 0.1}</Text>
                                </StyledView>
                                <StyledView className="flex flex-row items-center">
                                    <Text className="font-bold text-[#fff] text-base">Frais Partenaire : </Text>
                                    <Text className="font-bold text-[#fff] text-base">{"1000 Dh"}</Text>
                                </StyledView>
                            </LinearGradient>
                            <FooterButton continueWard="Valider" currentMenu="MontantFrais" handleClick={handleNavigation} />
                        </>}
                    </StyledView>
                </Pressable >
            </StyledView>
        </>
    );
}


function ButtonPille({ clickFrais, handleFraisClick }) {
    const StyledView = styled(View)
    return (
        <Pressable className="flex flex-row w-[25px] h-[25px] bg-[#5a2983] rounded-full justify-center items-center -z-20" onPress={() => handleFraisClick()}>
            <StyledView className={`flex flex-row w-[17px] h-[17px] ${clickFrais === true ? "bg-[#5a2983]" : "bg-[#fff]"} rounded-full  border-[2px] border-[#fff]`}  >

            </StyledView>
        </Pressable>
    )
}


function StepMenu({ activate = false, handleClick, tiTle, btnType }) {
    return (
        <Pressable className={`flex flex-row w-[85px] h-[100px] ${activate ? 'bg-[#5a2983]' : 'bg-[#947ca5] pointer-events-none'} items-center justify-center rounded-3xl`}>
            <Text className='text-[#fff] text-center font-bold'>{tiTle}</Text>
        </Pressable>
    )
}

function FooterButton({ activateContinue = true, activateBack = true, continueWard = "Suivant", backward = "Annuler", middleware = "Precedant", showMiddle = true, currentMenu = "InfoExp", handleClick }) {
    const StyledView = styled(View)
    return (
        <StyledView className="flex flex-row w-full justify-around items-center my-4">
            <Pressable className={`flex flex-row w-[100px] h-[50px] ${activateBack ? 'bg-[#973d3d] ' : 'bg-[#ddc4c4]'} justify-center items-center rounded-lg`} >
                <Text className="text-center font-bold text-[#fff]">{backward}</Text>
            </Pressable>
            {showMiddle && <Pressable className={`flex flex-row w-[100px] h-[50px] ${activateBack ? 'bg-[#afb83c] ' : 'bg-[#83973d]'} justify-center items-center rounded-lg`} onPress={() => handleClick(currentMenu, "prev")}>
                <Text className="text-center font-bold text-[#fff]">{middleware}</Text>
            </Pressable>}
            <Pressable className={`flex flex-row w-[100px] h-[50px]  ${activateContinue ? 'bg-[#3d9758]' : 'bg-[#c5e9d0]'} justify-center items-center rounded-lg`} onPress={() => handleClick(currentMenu, "suiv")}>
                <Text className="text-center font-bold text-[#fff]">{continueWard}</Text>
            </Pressable>
        </StyledView>
    )
}




function styleGenerator({ windowHeight, windowWidth }) {
    console.log("la data for nouveau transfert : ", windowWidth)
    if (windowWidth > 320 && windowWidth < 400) {
        return {
            popupContainerWidth: "w-[320px]"
        }
    } else {
        return {
            popupContainerWidth: "w-[350px]"
        }
    }
}


function InnerDropDown({ data, label = "pays De Destination" }) {
    return (
        <StyledView className='flex flex-col my-5'>
            <Text className="w-[200px] text-base font-bold text-[#88a6a1]">{label}</Text>
            <SelectDropdown
                defaultButtonText="selectionné un pays"
                defaultValueByIndex={0}
                rowStyle={{
                    marginHorizontal: 10,
                    height: 100,

                }}
                buttonStyle={{
                    borderRadius: 10,
                    width: 150,
                    height: 70,
                    backgroundColor: "#88a6a1"
                }}
                renderDropdownIcon={() => <Ionicons name="md-chevron-down-sharp" size={24} color="#32a852" />}
                renderSearchInputLeftIcon={() => <Ionicons name="md-search-outline" size={24} color="#32a852" />}
                search
                renderCustomizedRowChild={(item) => <Text>{item.name}</Text>}
                searchPlaceHolder="recherche"
                data={data}

                onSelect={(selectedItem, index) => {

                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.name
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
        </StyledView>
    )
}

export default React.memo(NouveauTransfert)
