import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const foods = [
  {
    name: 'Pizza',
    image: 'https://example.com/pizza.jpg',
  },
  {
    name: 'Sushi',
    image: 'https://example.com/sushi.jpg',
  },
  {
    name: 'Tacos',
    image: 'https://example.com/tacos.jpg',
  },
  {
    name: 'Sopa de tortilla',
    image: 'https://example.com/ensalada.jpg',
  },
  {
    name: 'Hamburguesa',
    image: 'https://example.com/hamburguesa.jpg',
  },
  {
    name: 'Pasta',
    image: 'https://example.com/pasta.jpg',
  },
  {
    name: 'Lasagna',
    image: 'https://example.com/ramen.jpg',
  },
  {
    name: 'Hamburguesa',
    image: 'https://example.com/paella.jpg',
  },
  {
    name: 'Pescado frito',
    image: 'https://example.com/ceviche.jpg',
  },
  {
    name: 'Churrasco',
    image: 'https://example.com/churrasco.jpg',
  },
  {
    name: 'Tomahawk',
    image: 'https://example.com/tiramisu.jpg',
  },
  {
    name: 'Panini',
    image: 'https://example.com/croissant.jpg',
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
      <Image source={{ uri: item.image }} style={styles.image} />
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
