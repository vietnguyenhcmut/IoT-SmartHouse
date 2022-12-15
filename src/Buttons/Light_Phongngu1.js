import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_phongngu1 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_phongngu1 = async () => {
    const responsePhongngu1 = await fetch(addr_phongngu1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu1: 1}),
    }
    );
};

const off_phongngu1 = async () => {
    const responsePhongngu1 = await fetch(addr_phongngu1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu1: 0}),
    }
    );
};

export default function Light_Phongngu1() {
    const [isEnable_phongngu1, setIsEnable_phongngu1] = useState(false)
    const [backgroundColorphongngu1, setBackgroundColorphongngu1] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongngu1 = () => {
        if (isEnable_phongngu1)
        {
            off_phongngu1()
            setBackgroundColorphongngu1(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongngu1()
            setBackgroundColorphongngu1(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongngu1(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="PHÒNG NGỦ 1" onPress={() => {toggleSwitch_phongngu1()}} color={backgroundColorphongngu1}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        margin: 2,
        width: Dimensions.get('window').width / 2 - 6,
        height: 50,
    }
}
)