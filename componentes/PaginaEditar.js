import { View,Text, TextInput, TouchableOpacity,FlatList} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style';

export default function (props){

    

    function editarIten (){
        
        let id = 0;
        if(props.listaDeitens.length>0){
          id = props.listaDeitens[props.listaDeitens.length-1].id+1;
        }
    
        let newLista = {id:id,carinho:'red', nome:props.nomeItem, loca:props.local, valor:props.valor,quantidade:props.quantidade,total:props.quantidade*props.valor};
        props.setListaDEitens([...props.listaDeitens,newLista]);
    
        (async()=>{
          try{
            await AsyncStorage.setItem('listaDeitens', JSON.stringify([...props.listaDeitens,newLista]))
          } catch (error){
    
          }
        })();
        
        props.setNomeItem('');
        props.setLocal('');
        props.setValor(0);
        props.setQuantidade(1);
        props.setPagina('principal');
      }

    return(
        <View style={styles.paginaEditar}>
            <FlatList
                data={props.editarIten}
                renderItem={({item})=>
                    <View >
                        <View style={styles.listaItenPaginaEditar}>
                        <Text >Local: </Text>
                        <TextInput
                            autoFocus={false}
                            multiline={false}
                            onChangeText={text=>props.setLocal(text)}
                        >
                            <Text style={styles.itenPaginaEditar}>
                                {item.loca}
                            </Text>
                        </TextInput>
                        </View>
                        
                        <View style={styles.listaItenPaginaEditar}>
                        <Text >Quantidade: </Text>
                        <TextInput
                            autoFocus={false}
                            multiline={false}
                            onChangeText={text=>props.setQuantidade(text)}
                        >
                            <Text style={styles.itenPaginaEditar}>
                                {item.quantidade}
                            </Text>
                        </TextInput>
                        </View>

                        <View style={styles.listaItenPaginaEditar}>
                        <Text >Valor: </Text>
                        <TextInput
                            autoFocus={false}
                            multiline={false}
                            onChangeText={text=>props.setValor(text)}
                        >
                            <Text style={styles.itenPaginaEditar}>
                                {item.valor}
                            </Text>
                        </TextInput>
                        </View>

                        <TouchableOpacity
                            style={styles.BTNAdicionar}
                            onPress={()=>editarIten()}
                        >
                            <Text style={styles.txtBTNadicionar}>CONCLUIR</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
            

        </View>
    )
}