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
    <View style={styles.container}>
      {comidasFavoritas.map((comida) => (
        <View key={comida.nombre} style={styles.comida}>
          <Image source={{ uri: comida.imagen }} style={styles.imagen}
 />
          <Text style={styles.nombre}>{comida.nombre}</Text>
          <Text style={styles.descripcion}>{comida.descripcion}</Text>
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  comida: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  imagen: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descripcion: {
    fontSize: 16,
  },
});
export default Comidas;
