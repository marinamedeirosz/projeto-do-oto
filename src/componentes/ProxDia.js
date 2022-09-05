import { View, Image, StyleSheet } from "react-native";
import Texto from "../componentes/Texto"

let img

export default function ProxDia(props){
    img=props.img

    return(
        <View style={styles.proxdiaView}>
            <View style={styles.proxdiaView2}>
                <Image style={styles.proxdiaImg} source={img}></Image>
            </View>
            <View style={styles.proxdiaView2}>
                <Texto style={styles.proxdiaTexto} texto={props.texto} cor={props.cor}></Texto>
            </View>
            <View style={styles.proxdiaView2}>
                <Texto style={styles.proxdiaTexto} texto={props.texto2} cor={props.cor}></Texto>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    proxdiaView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    proxdiaImg: {
        width: 35,
        height: 35,
        margin: 10
    },
    proxdiaTexto: {
        margin: 10
    }
})