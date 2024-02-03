import { styled } from 'nativewind';
import React, { useRef } from 'react'
import { Text, TextInput, View, useWindowDimensions } from 'react-native'

function InputField({ keyboardType, placeholder, headerColorClass = "bg-[#5a2983]", headerText, width = "w-[170px]", componentref = useRef(), defaultValue = "" }) {

    const StyledView = styled(View);
    const windowSize = useWindowDimensions();
    const styleSheet = styleGeneretor({ windowHeigth: windowSize.height, windowWidth: windowSize.width });

    return (
        <StyledView className={`flex flex-col  mt-3 `}>
            <StyledView>
                <StyledView className={`flex flex-row ${headerColorClass} ${styleSheet.labelContainer.w} ${styleSheet.labelContainer.h} justify-center rounded-t-lg items-center `}>
                    <Text className={`text-[#fff] text-base`}>{headerText}</Text>
                </StyledView>
                <StyledView className={`flex flex-row ${width}  border-[3px] ${(componentref.current?.value !== "") ? 'border-[#115DA9]' : 'border-[#af3504]'}   items-center justify-center`}>
                    <TextInput
                        ref={componentref}
                        onChange={(e) => {
                            componentref.current.value = e.nativeEvent.text
                        }}
                        className={`w-[90%]  ${styleSheet.inputContainer.h} p-1`}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        onEndEditing={(e) => {
                            if (componentref.current?.value == "") {
                                // componentref.current.value = 
                            }
                        }}
                        defaultValue={defaultValue}
                    />
                </StyledView>
            </StyledView>
        </StyledView>
    )
}

function styleGeneretor({ windowHeigth, windowWidth }) {

    let styler = {
        fontSize: "",
        inputContainer: {
            w: "",
            h: ""
        },
        labelContainer: {
            w: "",
            h: ""
        }

    };

    if (windowWidth > 400 && windowHeigth < 500) {
        styler = {
            ...styler,
            fontSize: "text-[18px]",
            inputContainer: {
                ...styler.inputContainer,
                w: "w-[325px]"
            },
            labelContainer: {
                ...styler.inputContainer,
                w: "w-[100px]",
            }
        }
    } else {
        styler = {
            ...styler,
            fontSize: "text-[15px]",
            inputContainer: {
                ...styler.inputContainer,
                w: "w-[225px]"
            },
            labelContainer: {
                ...styler.inputContainer,
                w: "w-[100px]",
            }

        }

    }
    if (windowHeigth > 7000 && windowHeigth < 800) {
        styler = {
            ...styler,
            inputContainer: {
                ...styler.inputContainer,
                h: "h-[70px]"
            },
            labelContainer: {
                ...styler.labelContainer,
                h: "w-[40px]",
            }
        }
    } else {
        styler = {
            ...styler,
            inputContainer: {
                ...styler.inputContainer,
                h: "h-[40px]"
            },
            labelContainer: {
                ...styler.labelContainer,
                h: "h-[30px]",
            }
        }
    }

    return styler;
}

export default React.memo(InputField)