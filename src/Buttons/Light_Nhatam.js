import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_nhatam = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhaduoi.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_nhatam = async () => {
    const responseNhatam = await fetch(addr_nhatam,
    {
        method: 'PATCH',
        body: JSON.stringify({light_nhatam: 1}),
    }
    );
};

const off_nhatam = async () => {
    const responseNhatam = await fetch(addr_nhatam,
    {
        method: 'PATCH',
        body: JSON.stringify({light_nhatam: 0}),
    }
    );
};

export default function Light_Nhatam() {
    const [isEnable_nhatam, setIsEnable_nhatam] = useState(false)
    const [backgroundColornhatam, setBackgroundColornhatam] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_nhatam = () => {
        if (isEnable_nhatam)
        {
            off_nhatam()
            setBackgroundColornhatam(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_nhatam()
            setBackgroundColornhatam(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_nhatam(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="NHÀ TẮM" onPress={() => {toggleSwitch_nhatam()}} color={backgroundColornhatam}/>
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