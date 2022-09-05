import { StyleSheet, View, Image } from "react-native";
import Texto from "../componentes/Texto";
import Detalhes from "../componentes/Detalhes";
import Temperatura from "../componentes/Temperatura";
import vento from "../../assets/vento.png"
import termometro from "../../assets/termometro.png"
import sol from "../../assets/sol.png"
import pressao from "../../assets/pressao.png"


export default function Clima() {
  return (
    <View style={styles.climaView}>
        <Image style={styles.climaImg} source={require("../../assets/dia-nublado.png")} />
        <Texto texto="Heavy Rain" cor="#F8FFFF" fonte="22"></Texto>
        <Texto texto="Sunday, 02 Oct" cor="#7ea1e6" fonte="18"></Texto>
        <Temperatura t="24°"></Temperatura>
        <View style={styles.climaView2}>
          <Detalhes texto="WIND" texto2="19.2 km/j" img={vento}></Detalhes>
          <Detalhes texto="FEELS LIKE" texto2="25°" img={termometro}></Detalhes>
          <Detalhes texto="INDEX UV" texto2="2" img={sol}></Detalhes>
          <Detalhes texto="PRESSURE" texto2="1014 mbar" img={pressao}></Detalhes>
        </View> 
    </View>
  ); 
}
 
const styles = StyleSheet.create({
    climaView: {
        backgroundColor: "#437AFF",
        borderRadius: 10,
        margin: 10, 
        alignItems: "center"
    }, 
    climaView2: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      alignItems: "flex-start",
      margin: 5
    },
    climaImg: {
        width: 50,
        height: 50,
        margin: 20
    } 
  },
);
