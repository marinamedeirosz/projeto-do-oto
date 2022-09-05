import { StyleSheet, View } from "react-native";
import Previsao from "../componentes/Previsao";
import nuvem from '../../assets/nuvem.png';
import chuva from '../../assets/chuva.png';
import solnu from '../../assets/dia-nublado.png';
import sol from '../../assets/sol.png';
import PrevisaoDia from "../componentes/PrevisaoDia";


export default function PrevisaoSemana() {
  return (
    <View style={styles.psemanaView}>
        <PrevisaoDia t1="12:00" t2="Now" img={nuvem}></PrevisaoDia>
        <Previsao t1="14:00" t2="22°" img={chuva}></Previsao>
        <Previsao t1="16:00" t2="26°" img={nuvem}></Previsao>
        <Previsao t1="18:00" t2="25°" img={solnu}></Previsao>
        <Previsao t1="20:00" t2="31°" img={solnu}></Previsao>
        <Previsao t1="22:00" t2="28°" img={sol}></Previsao> 
    </View>
  );
}

const styles = StyleSheet.create({
    psemanaView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        overflowX: "auto",
        alignItems: "flex-start",
        margin: 5,
    }
});