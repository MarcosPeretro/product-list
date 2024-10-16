import { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { FilterBar } from './Components/FilterBar';
import { ProductList } from './Components/ProductList';

export default function App() {

  const [filtros, setFiltros] = useState({
    Categoria: "",
    Nome: "",
    PrecoMinimo: "",
    PrecoMaximo: "",
    Estoque: "",
  })

  const itens = [
    {
      Id: 1,
      Nome: "Geladeira eletrolux 3 portas com aguinha",
      Preco: 98.99,
      Categoria: "Eletronicos",
      Estoque: 10,
      Imagem: "",
    },
    {
      Id: 2,
      Nome: "PC gamer i11",
      Preco: 42000,
      Categoria: "Eletronicos",
      Estoque: 1,
      Imagem: "",
    },
    {
      Id: 3,
      Nome: "Airfry",
      Preco: 12.49,
      Categoria: "Eletronicos",
      Estoque: 0,
      Imagem: "",
    },
    {
      Id: 82,
      Nome: "Cadeira de balanço",
      Preco: 149.99,
      Categoria: "Mobilia",
      Estoque: 700,
      Imagem: "",
    },
    {
      Id: 999,
      Nome: "Tapete de vo",
      Preco: 1,
      Categoria: "Mobilia",
      Estoque: 4000000,
      Imagem: "",
    },
    {
      Id: 1000,
      Nome: "Bombona",
      Preco: 39.99,
      Categoria: "Mobilia",
      Estoque: 22,
      Imagem: "",
    },

    {
      Id: 150,
      Nome: "Espada de damasco",
      Preco: 67.99,
      Categoria: "Forja",
      Estoque: 0,
      Imagem: "",
    },
    {
      Id: 200,
      Nome: "Boomerangue",
      Preco: 32.50,
      Categoria: "Forja",
      Estoque: 299,
      Imagem: "",
    },
    {
      Id: 250,
      Nome: "Armadura medieval completa",
      Preco: 499,
      Categoria: "Forja",
      Estoque: 4,
      Imagem: "",
    },
  ]
  return (
    <View style={styles.container}>
      <FilterBar filtros={filtros} setFiltros={setFiltros}/>
      <ProductList produtos={itens} filtros={filtros}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
    paddingTop: StatusBar.currentHeight + 15
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    color: '#FFF',
  },
  input: {
    outline: 'none',
    fontSize: 16,
    color: '#333',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff'
  },

  containerPreco: {

    flexDirection: 'collum',
    alignItems: 'center',
    columnGap: 8,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingTop: 8,
    height: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: '#fff'
  },
  Estoque: {
    alignItems: "center",
    flexDirection: "row",
    collumGap: 8, 
  }
});
