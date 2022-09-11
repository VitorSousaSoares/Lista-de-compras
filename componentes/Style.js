import { StyleSheet } from "react-native";

// paleta de cores
// 003049
// d62828
// f77f00
// fcbf49
// eae2b7

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eae2b7' 
    },
    topoDApagina:{
        backgroundColor:'#003049',
        flexDirection:'row',
        padding:8,
    },
    tituloDApagina:{
        color:"#fff",
        fontSize:24,
        width:'100%',
    },
    tituloItenEditar:{
        color:"#fff",
        width:'50%',
        
        
    },
    tituloEditar:{
        color:"#fff",
        fontSize:25,
    },
    botaoDEinforme:{
        width:'50%',
        
    },
    botaoEditar:{
        width:'50%',
        
    },
    iconeDEinforme:{
        color:"#fff",
        textAlign:'right',
        marginTop:5,
    },
    basePaginaPrincipal:{
        flexDirection:'row',
        backgroundColor:'#003049',
    },
    basePaginaPrincipalcentor:{
        width:'15%',
        height:50,
    },
    txtbasePaginaPrincipalcentor:{
        color:"#003049",
        fontSize:30,
        textAlign:'center',
        textAlignVertical:'center',
    },
    btnbasePaginaPrincipalcentor:{
        marginTop:3,
        width:44,
        height:44,
        backgroundColor:'#fff',
        borderRadius:22,
        alignSelf:'center',
    },
    basePaginaPrincipalesquedo:{
        width:'85%',
        flexDirection:'row',
    },
    txtbasePaginaPrincipalesquedo:{
        color:"#fff",
        fontSize:25,
        textAlignVertical:'center'
    },


    tituloDApaginaInforme:{
        color:"#fff",
        fontSize:20,
        width:'50%',
    },
    logo:{
        marginTop:150,
        width:150,
        height:150,
        alignSelf:"center",
    },
    TxtInfo:{
        marginTop:10,
        textAlign:'center'
    },


    paginaAdicionar:{
        padding:5
    },
    legendaItem:{
        flexDirection:'row',
        borderColor:"#003049",
        borderBottomWidth:1,
        paddingBottom:5
    },
    legendaLocal:{
        flexDirection:'row',
        borderColor:"#003049",
        borderBottomWidth:1,
        paddingBottom:5,
        marginTop:15
    },
    legendaValor:{
        flexDirection:'row',
        borderColor:"#003049",
        borderBottomWidth:1,
        paddingBottom:5,
        marginTop:15
    },
    legendaQuantidade:{
        flexDirection:'row',
        borderColor:"#003049",
        borderBottomWidth:1,
        paddingBottom:5,
        marginTop:15
    },
    legenda:{
        fontSize:20
    },
    imput:{
        marginLeft:5,
        fontSize:20,
    },
    BTNAdicionar:{
        marginTop:15,
        alignSelf:'center',
        backgroundColor:'#f77f00',
        width:150,
        height:40,
        borderRadius:20,
    },
    txtBTNadicionar:{
        textAlign:'center',
        marginTop:8
    },
    listaPAGINAprincipal:{
        flexDirection:'row',
        height:50,
        marginBottom:3,
        marginTop:3,
        alignItems:'center',
        backgroundColor:'#fcbf49',
        paddingLeft:10,
    },
    checkBox:{
        width:'10%',
    },
    legendaLISTApaginaPRIMCIPAL:{
        width:"80%",
    },
    editarLEGENDA:{
        width:'10%',
    },
    paginaEditar:{
        padding:5,
    },
    listaItenPaginaEditar:{
        backgroundColor:'#fcbf49',
        padding:8,
        marginBottom:3,
        marginTop: 3
    },
    itenPaginaEditar:{
        fontSize:25
    },

});

export default styles;