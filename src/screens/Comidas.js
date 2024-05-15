import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;

const comidasFavoritas = [
  {
    imagen: "../../assets/juan.jpg",
    nombre: "Pizza",
    descripcion:
      "Una deliciosa pizza con queso mozzarella, salsa de tomate y pepperoni.",
  },
  {
    imagen: "../../assets/juan.jpg",
    nombre: "Hamburguesa",
    descripcion:
      "Una jugosa hamburguesa con queso cheddar, lechuga, tomate y cebolla.",
  },
  {
    imagen: "../../assets/juan.jpg",
    nombre: "Sushi",
    descripcion: "Un delicioso surtido de sushi con salmón, atún y aguacate.",
  },
  {
    imagen: ".../../assets/juan.jpg",
    nombre: "Tacos",
    descripcion:
      "Unos tacos tradicionales con carne asada, cebolla y cilantro.",
  },
  {
    imagen: "../../assets/juan.jpg",
    nombre: "Pasta",
    descripcion: "Un plato de pasta con salsa de tomate y albahaca.",
  },
  {
    imagen: "../../assets/juan.jpg",
    nombre: "Arroz con pollo",
    descripcion: "Un plato de arroz con pollo, verduras y salsa.",
  },
];

const Comidas = () => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={comidasFavoritas}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imagen} style={styles.imagen} />
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
          </View>
        )}
        horizontal={true}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: windowWidth * 0.8, // Set the width to 80% of the window width
  },
  imagen: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 16,
    textAlign: "center",
  },
});
export default Comidas;
