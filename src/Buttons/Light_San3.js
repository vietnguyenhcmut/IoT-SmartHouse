import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_san3 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/ngoaisan.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_san3 = async () => {
    const responseSan3 = await fetch(addr_san3,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san3: 1}),
    }
    );
};

const off_san3 = async () => {
    const responseSan3 = await fetch(addr_san3,
    {
        method: 'PATCH',
        body: JSON.stringify({light_san3: 0}),
    }
    );
};

export default function Light_San3() {
    const [isEnable_san3, setIsEnable_san3] = useState(false)
    const [backgroundColorsan3, setBackgroundColorsan3] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_san3 = () => {
        if (isEnable_san3)
        {
            off_san3()
            setBackgroundColorsan3(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_san3()
            setBackgroundColorsan3(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_san3(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="SÂN 3" onPress={() => {toggleSwitch_san3()}} color={backgroundColorsan3}/>
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