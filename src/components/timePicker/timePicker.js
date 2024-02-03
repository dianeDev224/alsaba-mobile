import { useState } from 'react';

import {
    Pressable,
    Text,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { Styles } from './styles';

export default function TimePicker({ extraStyles = {} }) {

    const [time, setTime] = useState(new Date(Date.now()));



    const onChange = (event, selectedTime) => {
        const currenTime = selectedTime;
        setTime(currenTime);
        console.log("selection is : ", currenTime)
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: time,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showTimepicker = () => {
        showMode('time');
    };



    function TimeFormatter({ selectionTime }) {
        const heure = selectionTime.getHours();
        const minute = selectionTime.getMinutes();
        const second = selectionTime.getSeconds();
        return `${heure} h /${minute} mn/${second}s `
    }


    return (
        <Pressable style={[Styles.container, extraStyles.container]} onPress={showTimepicker}>
            <Feather name="clock" size={extraStyles.iconSize ? extraStyles.iconSize : 24} color="black" />
            <Text style={[Styles.timeContent, extraStyles.timeContent]}>{TimeFormatter({ selectionTime: time })}</Text>
        </Pressable>


    )
}