import { Text, Touchable, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
    name: string
}

export function Buttons(props:Props) {

    return(
        <View>
            <TouchableOpacity style={styles.buttonBox} >
                <Text style={styles.buttonText} >{props.name} </Text>
            </TouchableOpacity>
        </View>
    )
}