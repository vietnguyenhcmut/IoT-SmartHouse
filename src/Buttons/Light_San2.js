import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_san2 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_san2 = async () => {
    const responseSan2 = await fetch(addr_san2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san2: 1}),
    }
    );
};

const off_san2 = async () => {
    const responseSan2 = await fetch(addr_san2,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san2: 0}),
    }
    );
};

export default function Light_San2() {
    const [isEnable_san2, setIsEnable_san2] = useState(false)
    const [backgroundColorsan2, setBackgroundColorsan2] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san2 = () => {
        if (isEnable_san2)
        {
            off_san2()
            setBackgroundColorsan2(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san2()
            setBackgroundColorsan2(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san2(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="SÂN 2" onPress={() => {toggleSwitch_san2()}} color={backgroundColorsan2}/>
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