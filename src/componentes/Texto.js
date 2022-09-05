import { StyleSheet, Text, View } from "react-native";


let cor;
let fonte;

export default function Texto(props) {
  cor=props.cor
  fonte=parseInt(props.fonte)
  return (
    <View style={styles.textoView}>
      <Text style={{color: cor, fontSize: fonte}}>{props.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textoView: {
    alignItems: "center"
  },
});
