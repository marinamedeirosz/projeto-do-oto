import { View, StyleSheet, Image} from "react-native";
import Texto from "./Texto";


let texto
let texto2
let img
let fonte

export default function PrevisaoDia(props){
    texto=props.t1
    fonte=props.fonte
    texto2=props.t2
    img=props.img
    fonte=props.fonte
    
    return(
        <View style={[styles.previsaoView, {backgroundColor: "#437AFF"}]}>
            <Texto texto={texto} cor="#FEFFFF" fonte="10"></Texto>
            <Image style={styles.previsaoImg} source={img} />
            <Texto texto={texto2} cor="#FEFFFF" fonte="15"></Texto>
        </View>
    )
}

const styles = StyleSheet.create({
    previsaoView: {
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        margin: 10,
        alignItems: "center"
    },
    previsaoImg: {
        width: 40,
        height: 40,
        margin: 5
    },
})
