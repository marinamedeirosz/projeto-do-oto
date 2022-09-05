import { View, StyleSheet, Image} from "react-native";


export default function Menus(){
    return(
        <View style={styles.menusView}>
            <Image style={styles.menusImg} source={require("../../assets/menuicon.png")} />
            <Image style={styles.menusImg} source={require("../../assets/moreicon.png")} />
        </View>
    )
}   

const styles = StyleSheet.create({
    menusView: {
        flexDirection: "row",
        justifyContent: "space-between"
    }, 
    menusImg: {
        width: 70,
        height: 20,
        margin: 4
    }
})
