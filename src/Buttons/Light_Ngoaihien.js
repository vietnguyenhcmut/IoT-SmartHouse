import { StyleSheet, Text, View, Switch, Dimensions, Button} from 'react-native';
import { useState } from 'react';

const addr_ngoaihien = "https://iot-smarthouse-f7531-default-rtdb.asia-southeast1.firebasedatabase.app/nhatren.json"

const BACKGROUND_COLOR_LIGHT_OFF = '#000000'
const BACKGROUND_COLOR_LIGHT_ON = '#FF7000'

const on_ngoaihien = async () => {
    const responseNgoaihien = await fetch(addr_ngoaihien,
    {
        method: 'PATCH',
        body: JSON.stringify({light_ngoaihien: 1}),
    }
    );
};

const off_ngoaihien = async () => {
    const responseNgoaihien = await fetch(addr_ngoaihien,
    {
        method: 'PATCH',
        body: JSON.stringify({light_ngoaihien: 0}),
    }
    );
};

export default function Light_Ngoaihien() {
    const [isEnable_ngoaihien, setIsEnable_ngoaihien] = useState(false);
    const [backgroundColorngoaihien, setBackgroundColorngoaihien] = useState(BACKGROUND_COLOR_LIGHT_OFF)
    const toggleSwitch_ngoaihien = () => {
        if (isEnable_ngoaihien)
        {
            off_ngoaihien()
            setBackgroundColorngoaihien(BACKGROUND_COLOR_LIGHT_OFF)
        }
        else
        {
            on_ngoaihien()
            setBackgroundColorngoaihien(BACKGROUND_COLOR_LIGHT_ON)
        }
        setIsEnable_ngoaihien(previousState => !previousState)
    }
    return(
        <View style={styles.box}>
            <Button title="NGOÀI HIÊN" onPress={function() {toggleSwitch_ngoaihien()}} color={backgroundColorngoaihien}/> 
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