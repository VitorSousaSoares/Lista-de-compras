import React, {useState} from "react";
import { View, Modal, TouchableOpacity } from "react-native";

export default function (props){
    const [modal,setModal] = useState(false)

    const cor = (c) =>{
        props.setCorItem(c);
        setModal(false)
        
    }

    return(
        <View >
            <Modal
                visible={modal}
                animationType="fade"
                transparent={true}
            >
                <TouchableOpacity
                style={{
                    marginLeft:5,
                    width:40,
                    height:40,
                    marginTop:10,
                    backgroundColor:props.corItem,
                  }}
                onPress={()=>setModal(false)}
            >

            </TouchableOpacity>
 
            </Modal>
            
        </View>
    )
}