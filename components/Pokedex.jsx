import { View, Text, FlatList, StyleSheet } from "react-native";
import { useContext } from "react";
import { PokemonContext } from "../utils/pokemonContext";
import useFetchApi from "../utils/useFetchApi";
import PokemonCard from "./PokemonCard";

const URL = "https://pokeapi.co/api/v2/pokemon";

const Pokedex = () => {
  const { data, isLoading, error } = useFetchApi(URL);
  
  return (
    <View style={styles.pokemonContainer}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Pokedex error, cant show pokemon data</Text>}
      {data && (
        <FlatList
          data={data.results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(pokemon) => {
            return <PokemonCard pokemonData={pokemon.item} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonContainer: {
    flex:0.9,
    padding: 20,
  },
});

export default Pokedex;
