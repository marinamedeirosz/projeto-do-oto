import { StyleSheet, Text, View } from "react-native";


let cor

export default function Local(props) {
    cor=props.cor
    
    return (
        <View style={styles.localView}>
            <Text style={[styles.localStyle, {color: cor}]}>{props.texto}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    localView: {
        alignItems: "flex-start",
    },
    localStyle: {
        fontSize: 20,
        margin: 10
    },
});
