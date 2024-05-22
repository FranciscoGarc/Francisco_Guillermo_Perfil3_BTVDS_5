import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import guilleImage from '../images/guille.jpeg';

const students = [
  {
    id: 1,
    name: 'Francisco Daniel Garcia Ramos',
    card: '20220326',
    photo: guilleImage,
  },
  {
    id: 2,
    name: 'Guillermo Stanley Recinos Alvarenga',
    card: '20220383',
    photo: guilleImage,
  },
  // Agrega más estudiantes aquí
];

const Cards = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {students.map((student) => (
        <View key={student.id} style={styles.card}>
          <Image source={student.photo} style={styles.photo} />
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.cardNumber}>{`Carné: ${student.card}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardNumber: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Cards;