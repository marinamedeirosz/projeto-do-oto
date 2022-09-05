import { StyleSheet, Text, View } from "react-native";


export default function Temperatura(props) {
    return (
        <View style={styles.temperaturaView}>
            <Text style={styles.temperaturaStyle}>{props.t}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    temperaturaView: {
        alignItems: "center",
    },
    temperaturaStyle: {
        fontSize: 50,
        margin: 10,
        color: "#FEFFFF"
    },
});