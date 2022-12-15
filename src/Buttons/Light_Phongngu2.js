import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_phongngu2 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_phongngu2 = async () => {
    const responsePhongngu2 = await fetch(addr_phongngu2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu2: 1}),
    }
    );
};

const off_phongngu2 = async () => {
    const responsePhongngu2 = await fetch(addr_phongngu2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongngu2: 0}),
    }
    );
};

export default function Light_Phongngu2() {
    const [isEnable_phongngu2, setIsEnable_phongngu2] = useState(false)
    const [backgroundColorphongngu2, setBackgroundColorphongngu2] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongngu2 = () => {
        if (isEnable_phongngu2)
        {
            off_phongngu2()
            setBackgroundColorphongngu2(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongngu2()
            setBackgroundColorphongngu2(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongngu2(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="PHÒNG NGỦ 2" onPress={() => {toggleSwitch_phongngu2()}} color={backgroundColorphongngu2}/>
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