import { View, StyleSheet, Image} from "react-native";
import Local from "../componentes/Local"


export default function Menus(){
    return(
        <View style={styles.menus2View}>
            <View style={styles.menus2View2}>
                <Image style={styles.menus2Img} source={require("../../assets/seta-esquerda.png")} />
            </View>
            <View style={styles.menus2View2}>    
                <Local style={styles.menus2Local} texto="Bandung, Indonesia" cor="#FEFFFF"></Local>
            </View>
        </View>
    )
}   

const styles = StyleSheet.create({
    menus2View: {
        flexDirection: "row",
    }, 
    menus2View2: {
        alignItems: "flex-start"
    },
    menus2Img: {
        width: 20,
        height: 20,
        margin: 15
    }
});
