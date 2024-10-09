import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import useFetchApi from "../utils/useFetchApi";
import { useState } from "react";

const PokemonCard = ({ pokemonData }) => {
  const { data, isLoading, error } = useFetchApi(pokemonData.url);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };
  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  return (
    <View>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Pokedex error, cant show pokemon data</Text>}
      {data && (
        <View style={styles.pokemonCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: data.sprites.front_default }}
              style={styles.pokemonImage}
            />
            <Button title="More Info" color="red" onPress={handleOpenModal} />
          </View>
          <View styles={styles.pokemonDataContainer}>
            <Text style={styles.pokemonText}>Número: {data.id}</Text>
            <Text style={styles.pokemonText}>Nombre: {pokemonData.name}</Text>
            <Text style={styles.pokemonText}>Peso: {data.weight} kg</Text>
            <Text style={styles.pokemonText}>Altura: {data.height} cm</Text>
          </View>
          <Modal visible={modalIsVisible}>
            <View style={styles.fullInfoModal}>
              <View style={styles.pokemonPrimaryInfo}>
                <Text style={styles.pokemonModalText}>Número: {data.id}</Text>
                <Text style={styles.pokemonModalText}>
                  Nombre: {pokemonData.name}
                </Text>
              </View>
              <View style={styles.fullImages}>
                <Image
                  source={{ uri: data.sprites.front_default }}
                  style={styles.pokemonImage}
                />
                <Image
                  source={{ uri: data.sprites.back_default }}
                  style={styles.pokemonImage}
                />
              </View>
              <Text style={styles.pokemonText}>Información adicional</Text>
              <View style={styles.pokemonSecondaryInfo}>
                <Text style={styles.pokemonText}>Peso: {data.weight} kg</Text>
                <Text style={styles.pokemonText}>Altura: {data.height} cm</Text>
              </View>
              <Text style={styles.pokemonText}>Habilidades</Text>
              <View style={styles.pokemonSkills}>
                {data.abilities &&
                  data.abilities.map((pokemon, index) => {
                    console.log(pokemon);
                    return <Text>{index}.- {pokemon.ability.name}</Text>;
                  })}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Go back"
                  color="red"
                  onPress={handleCloseModal}
                />
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pokemonCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 20,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
  },
  imageContainer: {},
  pokemonDataContainer: {},
  pokemonImage: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonText: {
    marginVertical: 20,
    fontWeight: "bold",
  },
  fullInfoModal: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonPrimaryInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 2,
    padding: 10,
  },
  pokemonModalText: {
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  fullImages: {
    flexDirection: "row",
  },
  pokemonSecondaryInfo: {
    width: "100%",
    padding: 20,
    borderWidth: 2,
  },
  pokemonSkills: {
    width: "100%",
    padding: 20,
    borderWidth: 2,
  },
  buttonContainer: {
    margin: 30,
  },
});

export default PokemonCard;
