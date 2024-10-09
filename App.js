import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PokemonContextProvider } from "./utils/pokemonContext";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";

export default function App() {
  return (
    <PokemonContextProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header title="Pokedex" />
        <Pokedex />
      </View>
    </PokemonContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
  },
});
