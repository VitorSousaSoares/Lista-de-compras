import { View,Text, TextInput, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style';

export default function (props){

    

    function adicionarItem (){
        if (props.nomeItem != "" && props.local != '') {
            
            let id = 0;
            if(props.listaDeitens.length>0){
            id = props.listaDeitens[props.listaDeitens.length-1].id+1;
            }
        
            let newLista = {id:id,carinho:'red', nome:props.nomeItem, loca:props.local, valor:props.valor,quantidade:props.quantidade, total:props.quantidade*props.valor};
            props.setListaDEitens([...props.listaDeitens,newLista]);
        
            (async()=>{
            try{
                await AsyncStorage.setItem('listaDeitens', JSON.stringify([...props.listaDeitens,newLista]))
            } catch (error){
        
            }
            })();
        }
    
        props.setNomeItem('');
        props.setLocal('');
        props.setValor(0);
        props.setQuantidade(1);
        props.setPagina('principal');
      }

    return(
        <View style={styles.paginaAdicionar}>
            <View style={styles.listaItenPaginaEditar}>
                <Text >Item:</Text>
                <TextInput
                    autoFocus={true}
                    multiline={false}
                    onChangeText={text=> props.setNomeItem(text)}
                />
            </View>
            <View style={styles.listaItenPaginaEditar}>
                <Text >Loca:</Text>
                <TextInput
                    autoFocus={false}
                    multiline={false}
                    onChangeText={text=> props.setLocal(text)}
                />
            </View>
            <View style={styles.listaItenPaginaEditar}>
                <Text >Valor:</Text>
                <TextInput
                    autoFocus={false}
                    multiline={false}
                    placeholder="0.00"
                    onChangeText={text=> props.setValor(text)}
                />
            </View>
            <View style={styles.listaItenPaginaEditar}>
                <Text >Quantidade:</Text>
                <TextInput
                    autoFocus={false}
                    multiline={false}
                    placeholder="0"
                    onChangeText={text=> props.setQuantidade(text)}
                />
            </View>
            <TouchableOpacity
                style={styles.BTNAdicionar}
                onPress={()=>adicionarItem()}
            >
                <Text style={styles.txtBTNadicionar}>ADICIONAR</Text>
            </TouchableOpacity>
        </View>
    )
}