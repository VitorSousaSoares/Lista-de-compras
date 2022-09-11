import { View,Text, Image} from "react-native";
import styles from './Style';

export default function (){

    return(
        <View >
            <Image 
                source={require('./logo.png')}
                style={styles.logo}
            />
            <Text style={styles.TxtInfo}>Verssão 1.0</Text>
        </View>
    )
}