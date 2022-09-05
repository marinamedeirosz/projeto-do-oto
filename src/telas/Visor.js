import { View } from "react-native";
import Menus from '../telas/Menus';
import Local from '../componentes/Local';
import Clima from '../telas/Clima';
import Dia from "../telas/Dia";
import PrevisaoSemana from "./PrevisaoSemana";


export default function Visor() {
  return (
    <View>
        <Menus></Menus>
        <Local texto="Bandung, Indonesia"></Local>
        <Clima></Clima>
        <Dia></Dia>
        <PrevisaoSemana></PrevisaoSemana>
    </View>
  );
};