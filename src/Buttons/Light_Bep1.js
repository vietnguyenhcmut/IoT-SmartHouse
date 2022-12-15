import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';


const addr_bep1 = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_bep1 = async () => {
    const responseBep1 = await fetch(addr_bep1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep1: 1}),
    }
    );
};

const off_bep1 = async () => {
    const responseBep1 = await fetch(addr_bep1,
    {
        method: 'PATCH',
        body: JSON.stringify({light_bep1: 0}),
    }
    );
};

export default function Light_Bep1() {
    const [isEnable_bep1, setIsEnable_bep1] = useState(false)
    const [backgroundColorbep1, setBackgroundColorbep1] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_bep1 = () => {
        if (isEnable_bep1)
        {
            off_bep1()
            setBackgroundColorbep1(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_bep1()
            setBackgroundColorbep1(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_bep1(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="BẾP 1" onPress={() => {toggleSwitch_bep1()}} color={backgroundColorbep1}/>
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