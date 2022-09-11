import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, TouchableOpacity, View,FlatList } from 'react-native';
import styles from './componentes/Style';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import LI from './componentes/ListaDEintens';
import PaginaInforme from './componentes/PaginaInforme';
import PaginaAdicionar from './componentes/PaginaAdicionar';
import PaginaEditar from './componentes/PaginaEditar';
import PaginaCalculo from './componentes/PaginaCalculo';
import Carinho from './componentes/Carinho';



export default function App() {

  const [pagina,setPagina] = useState('principal');
  const [listaDeitens,setListaDEitens] = useState(LI);
  const [nomeItem, setNomeItem] = useState ('');
  const [local,setLocal] = useState('');
  const [valor,setValor] = useState(0);
  const [quantidade,setQuantidade] = useState(1);
  const [editarIten,setEditarItem] = useState('');
  

  useEffect(()=>{
    (async()=>{
      try{
        let listaDeitensAtual = await AsyncStorage.getItem('listaDeitens');
        if(listaDeitensAtual == null)
          setListaDEitens([]);
        else
          setListaDEitens(JSON.parse(listaDeitensAtual));
      }catch(erro){

      }
    })();
  },[])

  const excluir = (id) =>{
    let newLista = listaDeitens.filter(function(val){
      return val.id != id;
    });
    setListaDEitens(newLista);
    (async()=>{
      try{
        await AsyncStorage.setItem('listaDeitens',JSON.stringify(newLista));
      }catch (erro){

      }
    })();
    setPagina('principal')
  }

  const editar = (id,nome,quantidade,loca,valor) =>{
    let newLista = listaDeitens.filter(function(val){
      return val.id == id;
    });

    setEditarItem(newLista);

    let neLista = listaDeitens.filter(function(val){
      return val.id != id;
    });
    setListaDEitens(neLista);
    (async()=>{
      try{
        await AsyncStorage.setItem('listaDeitens',JSON.stringify(newLista));
      }catch (erro){

      }
    })();
    
    setNomeItem(nome);
    setLocal(loca);
    setValor(valor);
    setQuantidade(quantidade);
    setPagina('editar');
  }
  
  if (pagina === 'principal'){
    return (
      <View style={styles.container}>
        <View style={styles.topoDApagina}>
          <Text style={styles.tituloDApagina}>LISTA</Text>
          <TouchableOpacity 
            onPress={()=> setPagina("informe")}
            style={styles.botaoDEinforme}
          >
            <AntDesign name="infocirlceo" size={26} color="black" style={styles.iconeDEinforme}/>
          </TouchableOpacity>
        </View>

      <FlatList
        data={listaDeitens}
        renderItem={({item})=>
          <View style={styles.listaPAGINAprincipal}>
            <View style={styles.checkBox}>
                <Carinho/>
            </View>
            
            <View style={styles.legendaLISTApaginaPRIMCIPAL}>  
              <TouchableOpacity
                onPress={()=> editar(item.id, item.nome,item.quantidade,item.loca,item.valor)}
              >           
                <Text>Item: {item.nome} Quant: {item.quantidade}</Text>
                <Text>Local: {item.loca} Valor: {item.valor} </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.editarLEGENDA}>          
              <TouchableOpacity 
                onPress={()=> excluir(item.id)}
              >
              <AntDesign name="delete" size={24} color="#d62828" />
            </TouchableOpacity></View>
          </View>
        }

      />

        <View style={styles.basePaginaPrincipal}>
          <View style={styles.basePaginaPrincipalesquedo}>
            <Text style={styles.txtbasePaginaPrincipalesquedo}>TOTAL: </Text>
            <Text style={styles.txtbasePaginaPrincipalesquedo}> 
              <PaginaCalculo 
                listaDeitens={listaDeitens}
              />
            </Text>

          </View>
          <View style={styles.basePaginaPrincipalcentor}>
            <TouchableOpacity 
              style={styles.btnbasePaginaPrincipalcentor}
              onPress={()=> setPagina("Adicionar")}
            >
            <Text style={styles.txtbasePaginaPrincipalcentor}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar hidden />
      </View>
    )
  }else if (pagina === 'informe'){
    return (
      <View style={styles.container}>
        <View style={styles.topoDApagina}>
          <TouchableOpacity style={styles.botaoDEinforme}
            onPress={()=> setPagina("principal")}
          >
          <AntDesign name="leftcircleo" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.tituloDApaginaInforme}>INFORMAÇÃO</Text>
        </View>
        <PaginaInforme/>
        <StatusBar hidden />
      </View>
    );
  }else if (pagina === 'Adicionar'){
    return (
      <View style={styles.container}>
        <View style={styles.topoDApagina}>
          <TouchableOpacity style={styles.botaoDEinforme}
            onPress={()=> setPagina("principal")}
          >
          <AntDesign name="leftcircleo" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.tituloDApaginaInforme}>Adicionar Item</Text>
        </View>
   
        <PaginaAdicionar
            setPagina={setPagina}
            setNomeItem={setNomeItem}
            setLocal={setLocal}
            setValor={setValor}
            setQuantidade={setQuantidade}
            setListaDEitens={setListaDEitens}

            pagina={pagina}
            nomeItem={nomeItem}
            local={local}
            valor={valor}
            quantidade={quantidade}
            listaDeitens={listaDeitens}
        />

        <StatusBar hidden />
      </View>
    );
  }else if (pagina === 'editar'){
    return (
      <View style={styles.container}>
      
      <View style={styles.topoDApagina}>

          <FlatList
            style={styles.tituloItenEditar}
            data={editarIten}
            renderItem={({item})=>
            <View>
              <Text style={styles.tituloEditar}>{item.nome}</Text>
            </View>}
        />
      </View>

        <PaginaEditar
            
            setPagina={setPagina}
            setNomeItem={setNomeItem}
            setLocal={setLocal}
            setValor={setValor}
            setQuantidade={setQuantidade}
            setListaDEitens={setListaDEitens}

            nomeItem={nomeItem}
            local={local}
            valor={valor}
            quantidade={quantidade}
            editarIten={editarIten}
            pagina={pagina}
            listaDeitens={listaDeitens}
        />
        <StatusBar hidden />
      </View>
    );
  }else if (pagina != 'principal' || pagina !='informe' || pagina != 'Adicionar' || pagina != "editar"){
    return (
      <View style={styles.container}>
        <Text>erro</Text>
        <TouchableOpacity
          onPress={()=> setPagina("principal")}
        >
          <Text>VOLTAR</Text>
        </TouchableOpacity>
        <StatusBar hidden />
      </View>
    );
  }
}