import { FlatList, StyleSheet, Text, View, Switch  } from 'react-native';

export function ProductList({props}) {
  
  return (
    <View>
       <Switch
      onValueChange={setSelectedCategory}
      value={selectedCategory}

    />
      <Text>Id: {props.Id}</Text>
      <Text>Item: {props.Nome}</Text>
      <Text>Preço: {props.Preço}</Text>
      <Text>Estoque: {props.Estoque}</Text>
      <Text>Imagem: {props.Imagem}</Text>
      <Text></Text>
    </View>
  );
}