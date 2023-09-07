import { Text, View } from "react-native";
import { Inputs } from "../../../components/Inputs";
import { Buttons } from "../../../components/Button";
import styles from "./style";

export function Calculator(){

    return(
        <View style={styles.container} >
            <View>
                <Text style={styles.title} >Calculadora de IMC</Text>
                <Text style={styles.subTitle} >Descupra qual o seu índice de Massa Corporal</Text>
            </View>
            <View style={styles.imputBox} >
                <View style={styles.imputSubBox} >
                    <Text style={styles.imputTitle} >Peso (Kg)</Text>
                    <Inputs></Inputs>
                </View>
                <View style={styles.imputSubBox} >
                    <Text style={styles.imputTitle} >Altura (m)</Text>
                    <Inputs></Inputs>
                </View>
            </View>
            <View style={styles.buttonBox} >
                <Buttons name='CALCULAR'></Buttons>
            </View>
        </View>
    )
}
