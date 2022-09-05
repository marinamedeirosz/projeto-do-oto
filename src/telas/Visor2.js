import { View, StyleSheet, VirtualizedList } from "react-native-web";
import ProxDia from "../componentes/ProxDia";
import Texto from "../componentes/Texto";
import Menus2 from "../telas/Menus2";
import nuvem from '../../assets/nuvem.png';
import chuva from '../../assets/chuva.png';
import solnu from '../../assets/dia-nublado.png';
import sol from '../../assets/sol.png';



export default function Visor2(){
    return(
        <View style={styles.visor2View}>
            <Menus2></Menus2>
            <View style={styles.visor2View2}>    
                <Texto texto="Next 7 Days" cor="#FEFFFF" fonte="20"></Texto>
            </View>
            <View style={styles.visor2View3}>
                <ProxDia texto="Monday, 3 Oct" texto2="32 / 31°" cor="#FEFFFF" img={sol}></ProxDia>
                <ProxDia texto="Tuesday, 4 Oct" texto2="22 / 23°" cor="#FEFFFF" img={chuva}></ProxDia>
                <ProxDia texto="Wednesday, 5 Oct" texto2="30 / 31°" cor="#FEFFFF" img={sol}></ProxDia>
                <ProxDia texto="Thursday, 6 Oct" texto2="24 / 26°" cor="#FEFFFF" img={nuvem}></ProxDia>
                <ProxDia texto="Friday, 7 Oct" texto2="26 / 27°" cor="#FEFFFF" img={solnu}></ProxDia>
                <ProxDia texto="Saturday, 8 Oct" texto2="27 / 28°" cor="#FEFFFF" img={solnu}></ProxDia>
                <ProxDia texto="Sunday, 9 Oct" texto2="22 / 23°" cor="#FEFFFF" img={chuva}></ProxDia>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    visor2View: {
        backgroundColor: "#437AFF",
        height: '100%',
        width: '100%',
    },
    visor2View2: {
        alignItems: "flex-start",
        marginLeft: 20
    },
    visor2View3: {
        margin: 10
    }
});