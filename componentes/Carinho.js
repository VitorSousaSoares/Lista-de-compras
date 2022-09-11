import { View,Text, TouchableOpacity} from "react-native";
import { useState, useEffect } from 'react';
import Checkbox from 'expo-checkbox';

export default function (props){
    const [isChecked, setChecked] = useState(false);

    return(
        <View >
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        </View>
    )
}