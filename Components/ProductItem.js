import { StyleSheet, Text, View } from 'react-native';

export function ProductItem(props) {
    return (<View>
    <Text>Id: {props.Id}</Text>
    <Text>Item: {props.Nome}</Text>
    <Text>Preço: {props.Preco}</Text>
    <Text>Categoria: {props.Categoria}</Text>
    <Text>Estoque: {props.Estoque}</Text>
    <Text>Imagem: {props.Imagem}</Text>
    <Text></Text>

    </View>
    
   

    );
}