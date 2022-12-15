import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_san4 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_san4 = async () => {
    const responseSan4 = await fetch(addr_san4,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san4: 1}),
    }
    );
};

const off_san4 = async () => {
    const responseSan4 = await fetch(addr_san4,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san4: 0}),
    }
    );
};

export default function Light_San4() {
    const [isEnable_san4, setIsEnable_san4] = useState(false)
    const [backgroundColorsan4, setBackgroundColorsan4] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san4 = () => {
        if (isEnable_san4)
        {
            off_san4()
            setBackgroundColorsan4(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san4()
            setBackgroundColorsan4(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san4(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="SÂN 4" onPress={() => {toggleSwitch_san4()}} color={backgroundColorsan4}/> 
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