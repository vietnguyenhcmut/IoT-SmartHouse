import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

import { TouchableOpacity } from 'react-native';


const addr_bep2 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_bep2 = async () => {
    const responseBep2 = await fetch(addr_bep2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep2: 1}),
    }
    );
};

const off_bep2 = async () => {
    const responseBep2 = await fetch(addr_bep2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep2: 0}),
    }
    );
};

export default function Light_Bep2() {
    const [isEnable_bep2, setIsEnable_bep2] = useState(false)
    const [backgroundColorbep2, setBackgroundColorbep2] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_bep2 = () => {
        if (isEnable_bep2)
        {
            off_bep2()
            setBackgroundColorbep2(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_bep2()
            setBackgroundColorbep2(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_bep2(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="BẾP 2" onPress={() => {toggleSwitch_bep2()}} color={backgroundColorbep2}/>
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