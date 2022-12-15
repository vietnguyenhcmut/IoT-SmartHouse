import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_kho = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_kho = async () => {
    const responseKho = await fetch(addr_kho,
    {
        method: 'PATCH',
        body: JSON.stringify({light_kho: 1}),
    }
    );
};

const off_kho = async () => {
    const responseKho = await fetch(addr_kho,
    {
        method: 'PATCH',
        body: JSON.stringify({light_kho: 0}),
    }
    );
};

export default function Light_Kho() {
    const [isEnable_kho, setIsEnable_kho] = useState(false)
    const [backgroundColorkho, setBackgroundColorkho] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_kho = () => {
        if (isEnable_kho)
        {
            off_kho()
            setBackgroundColorkho(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_kho()
            setBackgroundColorkho(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_kho(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="KHO" onPress={() => {toggleSwitch_kho()}} color={backgroundColorkho}/>
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