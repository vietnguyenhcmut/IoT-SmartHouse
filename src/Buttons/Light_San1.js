import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_san1 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_san1 = async () => {
    const responseSan1 = await fetch(addr_san1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san1: 1}),
    }
    );
};

const off_san1 = async () => {
    const responseSan1 = await fetch(addr_san1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san1: 0}),
    }
    );
};

export default function Light_San1() {
    const [isEnable_san1, setIsEnable_san1] = useState(false)
    const [backgroundColorsan1, setBackgroundColorsan1] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san1 = () => {
        if (isEnable_san1)
        {
            off_san1()
            setBackgroundColorsan1(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san1()
            setBackgroundColorsan1(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san1(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="SÂN 1" onPress={() => {toggleSwitch_san1()}} color={backgroundColorsan1}/>
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