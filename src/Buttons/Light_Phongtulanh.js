import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_phongtulanh = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_phongtulanh = async () => {
    const responsePhongtulanh = await fetch(addr_phongtulanh,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongtulanh: 1}),
    }
    );
};

const off_phongtulanh = async () => {
    const responsePhongtulanh = await fetch(addr_phongtulanh,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongtulanh: 0}),
    }
    );
};

export default function Light_Phongtulanh() {
    const [isEnable_phongtulanh, setIsEnable_phongtulanh] = useState(false)
    const [backgroundColorphongtulanh, setBackgroundColorphongtulanh] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongtulanh = () => {
        if (isEnable_phongtulanh)
        {
            off_phongtulanh()
            setBackgroundColorphongtulanh(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongtulanh()
            setBackgroundColorphongtulanh(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongtulanh(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="PHÒNG TỦ LẠNH" onPress={() => {toggleSwitch_phongtulanh()}} color={backgroundColorphongtulanh}/>
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