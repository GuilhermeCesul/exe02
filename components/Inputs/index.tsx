import { TextInput, View } from "react-native";
import styles from "./styles";

export function Inputs() {

    return(
        <View style={styles.box} >
            <TextInput style={styles.input} inputMode="numeric" ></TextInput>
        </View>
    )
}
