import { View,Text} from "react-native";
import styles from './Style';

export default function (props){

    var soma = props.listaDeitens.reduce((item, valor) => item + valor.total, 0);

    return(

        <View style={styles.paginaAdicionar}>
                <Text style={styles.txtbasePaginaPrincipalesquedo}>R$ {soma}</Text>
        </View>
    )
}