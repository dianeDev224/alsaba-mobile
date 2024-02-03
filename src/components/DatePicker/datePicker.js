import { useState } from 'react';

import {
    Pressable,
    Text,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import {
    DateTimePickerAndroid,
} from '@react-native-community/datetimepicker/src/DateTimePickerAndroid';

import { Styles } from './styles';

export default function DatePicker({ extraStyles = {} }) {

    const [showConfirm, setShowConfirm] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));



    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        console.log("selection is : ", currentDate)
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    function DateFormatter({ selectionDate }) {
        function jourDate(Njour) {
            switch (Njour) {
                case 0:
                    return "Dimanche"
                case 1:
                    return "Lundi"
                case 2:
                    return "Mardi"
                case 3:
                    return "Mercredi"
                case 4:
                    return "Jeudi"
                case 5:
                    return "Vendredi"
                case 6:
                    return "Samedi"

            }
        }
        const jour = jourDate(selectionDate?.getDay());
        const date = selectionDate?.getDate()
        const mois = selectionDate?.getMonth() + 1;
        const annee = selectionDate?.getFullYear();

        return `${jour} ${date}/${mois}/${annee} `
    }


    return (
        <Pressable style={[Styles.container, extraStyles.container]} onPress={showDatepicker}>
            <AntDesign name="calendar" size={extraStyles.iconSize ? extraStyles.iconSize : 24} color="black" />
            <Text style={[Styles.dateContent, extraStyles.dateContent]}>{DateFormatter({ selectionDate: date })}</Text>
        </Pressable>
    )
}