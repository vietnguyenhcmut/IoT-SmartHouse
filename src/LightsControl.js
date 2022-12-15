import { StyleSheet, Text, View, Dimensions} from 'react-native';

import Light_Ngoaihien from './Buttons/Light_Ngoaihien';
import Light_Phongkhach from './Buttons/Light_Phongkhach';
import Light_Phongngu1 from './Buttons/Light_Phongngu1';
import Light_Phongngu2 from './Buttons/Light_Phongngu2';
import Light_Phongtulanh from './Buttons/Light_Phongtulanh';
import Light_Nhatam from './Buttons/Light_Nhatam';
import Light_Bep1 from './Buttons/Light_Bep1';
import Light_Bep2 from './Buttons/Light_Bep2';
import Light_Kho from './Buttons/Light_Kho';
import Light_San1 from './Buttons/Light_San1';
import Light_San2 from './Buttons/Light_San2';
import Light_San3 from './Buttons/Light_San3';
import Light_San4 from './Buttons/Light_San4';

export default function LightsControl() {

    return(
        <View style={styles.container}>

                <View style={styles.place}>
                    <Text style={styles.textplace}> NHÀ TRÊN </Text>
                </View>
                <View style={styles.place}>
                    <Text style={styles.textplace}> NGOÀI SÂN </Text>
                </View>
            
            <Light_Ngoaihien/>
            <Light_San4/>
            <Light_Phongkhach/>
            <Light_San3/>
            <Light_Phongngu1/>
            <Light_San2/>
            <Light_Phongngu2/>
            <Light_San1/>
            <Light_Phongtulanh/>

                <View style={styles.nonbox}>
                    <Text>  </Text>
                </View>
                <View style={styles.place}>
                    <Text style={styles.textplace}> NHÀ DƯỚI </Text>
                </View>
                <View style={styles.place}></View>

            <Light_Bep2/>
            <Light_Bep1/>
            <Light_Kho/>
            <Light_Nhatam/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        marginTop: 20
    },
    place: {
        width: Dimensions.get('window').width / 2 - 6,
        marginTop: 50,
    },
    textplace: {
        fontWeight: 'bold'
    },
    box: {
        margin: 2,
        width: Dimensions.get('window').width / 2 - 6,
        
    },
    nonbox: {
        margin: 2,
        width: Dimensions.get('window').width / 2 - 6,
        height: 50,
        backgroundColor: 'white'
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        width: ((Dimensions.get('window').width / 2 - 6) / 4) * 3
    },
    switch: {
        width: (Dimensions.get('window').width / 2 - 6) / 4
    }
}
)