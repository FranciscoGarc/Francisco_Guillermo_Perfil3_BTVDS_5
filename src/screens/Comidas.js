import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import churrascoImage from '../images/churrasco.jpg';
import hamburguesaImage from '../images/hamburguesa.jpeg';
import lasagnaImage from '../images/lasagna.jpg';
import paniniImage from '../images/panini.jpg';
import pescadoImage from '../images/pescado.jpg';
import pizzaImage from '../images/pizza.jpeg';
import tomahawkImage from '../images/tomahawk.jpeg';
import tacoImage from '../images/tacos.jpeg';
import sopaImage from '../images/sopa.jpg';
import tortaImage from '../images/torta.jpg';
import pupusaImage from '../images/pupusas.jpeg';

const foods = [
  {
    name: 'Pizza',
    image: pizzaImage,
  },
  {
    name: 'Hamburguesa',
    image: hamburguesaImage,
  },
  {
    name: 'Tacos',
    image: tacoImage,
  },
  {
    name: 'Sopa de tortilla',
    image: sopaImage,
  },
  {
    name: 'Pupusas',
    image: pupusaImage,
  },
  {
    name: 'Torta',
    image: tortaImage,
  },
  {
    
    name: 'Churrasco',
    image: churrascoImage,
  },
  {
    name: 'Hamburguesa',
    image: hamburguesaImage,
  },
  {
    name: 'Lasagna',
    image: lasagnaImage,
  },
  {
    name: 'Panini',
    image: paniniImage,
  },
  {
    name: 'Pescado frito',
    image: pescadoImage,
  },
  {
    name: 'Tomahawk',
    image: tomahawkImage,
  },
];

const Separator = ({ title }) => (
  <View style={styles.separator}>
    <Text style={styles.separatorText}>{title}</Text>
  </View>
);

const Comidas = () => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Image source={ item.image } style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </Card>
  );

  return (
    <FlatList
      data={[
        { separator: true, title: 'Guille' },
        ...foods.slice(0, 6),
        { separator: true, title: 'Fran' },
        ...foods.slice(6),
      ]}
      renderItem={({ item }) => {
        if (item.separator) {
          return <Separator title={item.title} />;
        }
        return renderItem({ item });
      }}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  card: {
    flexBasis: '48%',
    marginBottom: 15,
  },
  image: {
    height: 150,
    width: '100%',
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Comidas;
