import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_phongkhach = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_phongkhach = async () => {
    const responseNgoaihien = await fetch(addr_phongkhach,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongkhach: 1}),
    }
    );
};

const off_phongkhach = async () => {
    const responseNgoaihien = await fetch(addr_phongkhach,
    {
        method: 'PATCH',
        body: JSON.stringify({light_phongkhach: 0}),
    }
    );
};

export default function Light_Phongkhach() {
    const [isEnable_phongkhach, setIsEnable_phongkhach] = useState(false)
    const [backgroundColorphongkhach, setBackgroundColorphongkhach] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_phongkhach = () => {
        if (isEnable_phongkhach)
        {
            off_phongkhach()
            setBackgroundColorphongkhach(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_phongkhach()
            setBackgroundColorphongkhach(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_phongkhach(previousState => !previousState)
    }

    return(
        <View style={styles.box}>
            <Button title="PHÒNG KHÁCH" onPress={() => {toggleSwitch_phongkhach()}} color={backgroundColorphongkhach}/> 
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