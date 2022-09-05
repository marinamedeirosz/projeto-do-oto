import { StyleSheet, View, Image, Dimensions } from "react-native";
import Texto from "./Texto";

let cor;
let img

export default function Detalhes(props) {
    cor=props.cor
    img=props.img

    return (
        <View style={styles.detalhesView}>
            <Image style={styles.detalhesImg} source={img} />
            <View style={styles.detalhesView2}>    
                <Texto style={styles.detalhesText} texto={props.texto} cor="#7EB1FF"></Texto>
                <Texto style={styles.detalhesText} texto={props.texto2} cor="#FEFFFF"></Texto>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    detalhesView: {
        flexDirection: "row",
        alignItems: "center",
        margin: 5
    },
    detalhesView2:{
        margin: 2,
        alignItems: "flex-start"
    },
    detalhesImg: {
        width: 40,
        height: 40
    },
    detalhesText: {
        fontSize: 12,
        margin: 2,
        marginLeft: 2
    }
});
