import { KeyboardAvoidingView, Text, View } from 'react-native';
import styles from './styles';
import { Inputs } from '../../components/Inputs';
import { Buttons } from '../../components/Button';
import { Calculator } from './Calculator';
import { Response } from './Response';
import { Footer } from './Footer';

export default function Home() {

    return(
        <View style={styles.containerMaster} >
            <Calculator />
            <Response />
            <Footer />
        </View>
    )
}
