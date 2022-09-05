import { StyleSheet, View } from "react-native";
import Texto from "../componentes/Texto";


export default function Dia() {
  return (
    <View style={styles.diaView}>
        <Texto texto="Today" fonte="15"></Texto>
        <Texto texto="Next 7 Days >" cor="#808080" fonte="15"></Texto>
    </View>
  );
}

const styles = StyleSheet.create({
    diaView: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10
    }
});