import { Text, View } from "react-native";
import styles from "./styles";

export function Response() {

    return(
        <View style={styles.container} >
            <View>
                <Text style={styles.text} >Seu índice de massa corporal é</Text>
            </View>
            <View>
                <Text style={styles.result} >IMC</Text>
            </View>
        </View>
    )
}