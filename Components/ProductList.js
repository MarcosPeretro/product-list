import { FlatList, StyleSheet, Text, View, Switch} from 'react-native';
import { ProductItem } from './ProductItem';

export function ProductList(props) {

  const produtosFiltrados = props.produtos
    .filter(produto => !props.filtros.Categoria || produto.Categoria === props.filtros.Categoria)
    .filter(produto => produto.Nome.toUpperCase().includes(props.filtros.Nome.toUpperCase()))
    .filter(produto => produto.Preco >= Number(props.filtros.PrecoMinimo))  
    .filter(produto => !props.filtros.PrecoMaximo || produto.Preco <= Number(props.filtros.PrecoMaximo))
    .filter(produto => !props.filtros.Estoque || produto.Estoque > 0)

  
  return (
    <View style={styles.container}>
       <FlatList
        data={produtosFiltrados}
        renderItem={({ item }) => <ProductItem {...item} />}
        keyExtractor={(item) => item.Id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})