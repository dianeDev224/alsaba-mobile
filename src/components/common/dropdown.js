import {
    useId,
    useState,
    useTransition,
} from 'react';

import { styled } from 'nativewind';
import {
    Pressable,
    ScrollView,
    TextInput,
    View,
} from 'react-native';
import OutsidePressHandler from 'react-native-outside-press';

import { Octicons } from '@expo/vector-icons';

const StyledView = styled(View)

export default function DropDown({ RowItem = () => { }, SelectorForm = () => { }, LeftIcon = () => <Octicons name="search" size={20} color="#fff" />, RightIcon = () => { }, searPlaceHolder = "search" }) {

    const [showItem, setShowItem] = useState(false)
    const [selectItem, setSelectedItem] = useState();
    const [chevronOpen, setChevronOpen] = useState(false)
    const [isPending, startTransition] = useTransition();


    const data = [
        {
            name: "amadou1"
        },
        {
            name: "amadou2"
        },
        {
            name: "amadou3"
        },
        {
            name: "amadou4"
        },

    ]
    const uuid = useId()

    function hideRowItem() {
        startTransition(
            () => {
                setShowItem(false)
                setChevronOpen(false)
            }
        )
    }

    function toggleRowItem() {
        startTransition(
            () => {
                setShowItem(!showItem)
                setChevronOpen(!chevronOpen)
            }
        )
    }


    return (
        <StyledView className='flex flex-col items-center justify-center flex-1'>
            <OutsidePressHandler
                onOutsidePress={toggleRowItem}
            >
                <Pressable onPress={toggleRowItem}>
                    <SelectorForm />
                </Pressable>
                <StyledView
                    className={`${showItem ? 'flex flex-col' : 'hidden'}  z-[100000] w-[200px] border-[4px] border-[#478088] p-1 shadow-lg`}
                >
                    <StyledView className='flex flex-row w-full p-2 shadow-2xl rounded-sm bg-[#5278a8] space-x-2 items-center '>
                        <LeftIcon />
                        <TextInput
                            placeholder={searPlaceHolder}
                            className="flex-1 text-[#fff]"
                        />
                        {RightIcon}
                    </StyledView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        className="h-[200px]"
                    >
                        {data.map((item) => {
                            return <Pressable onPress={() => {
                                setSelectedItem(item.name)
                                hideRowItem()
                            }}>
                                <RowItem item={item} />
                            </Pressable>
                        })}
                    </ScrollView>
                </StyledView>
            </OutsidePressHandler>
        </StyledView>
    )
}