import { StyleSheet, Switch, Text, View, FlatList, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ProductItem } from './Components/ProductItem';
import { ProductList } from './Components/ProductList';
import { FilterBar } from './Components/FilterBar';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Eletronicos");
  
  const itens = [
    {
      Id: 1,
      Nome: "Geladeira eletrolux 3 portas com aguinha",
      Preço: 98.99,
      Categoria: "Eletronicos",
      Estoque: 10,
      Imagem: "",
    },
    {
      Id: 2,
      Nome: "PC gamer i11",
      Preço: 42000,
      Categoria: "Eletronicos",
      Estoque: 1,
      Imagem: "",
    },
    {
      Id: 3,
      Nome: "Airfry",
      Preço: 12.49,
      Categoria: "Eletronicos",
      Estoque: 0,
      Imagem: "",
    },
    {
      Id: 82,
      Nome: "Cadeira de balanço",
      Preço: 149.99,
      Categoria: "Mobilia",
      Estoque: 700,
      Imagem: "",
    },
    {
      Id: 999,
      Nome: "Tapete de vo",
      Preço: 1,
      Categoria: "Mobilia",
      Estoque: 4000000,
      Imagem: "",
    },
    {
      Id: 1000,
      Nome: "Bombona",
      Preço: 39.99,
      Categoria: "Mobilia",
      Estoque: 22,
      Imagem: "",
    },

    {
      Id: 150,
      Nome: "Espada de damasco",
      Preço: 67.99,
      Categoria: "Forja",
      Estoque: 0,
      Imagem: "",
    },
    {
      Id: 200,
      Nome: "Boomerangue",
      Preço: 32.50,
      Categoria: "Forja",
      Estoque: 299,
      Imagem: "",
    },
    {
      Id: 250,
      Nome: "Armadura medieval completa",
      Preço: 499,
      Categoria: "Forja",
      Estoque: 4,
      Imagem: "",
    },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer} >
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(itemValue) =>
            setSelectedCategory(itemValue)
          }>
          <Picker.Item label="Eletrodomesticos" value="Eletronicos" />
          <Picker.Item label="Moveis" value="Mobilia" />
          <Picker.Item label="Forja" value="Forja" />
        </Picker>
        
      </View>
      <FlatList
        data={itens}
        renderItem={({ item }) => <ProductList props={item} />}
        keyExtractor={(item) => item.Id}
      />
     
    </View>
  );
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    color: '#FFF',
  },
});
