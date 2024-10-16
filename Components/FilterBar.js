import { StyleSheet, Text, View,TextInput, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export function FilterBar(props) {
    return (
    <View>
        <View style={styles.containerInput}>
            <Ionicons name='search' size={20} color='#999' />
            <TextInput
                value={props.filtros.Nome}
                onChangeText={texto => props.setFiltros({
                    ...props.filtros,
                    Nome: texto
                })}
                style={styles.input}
                placeholder='Buscar...'
                placeholderTextColor='#999'
            />
        </View>
        <View style={styles.containerPreco}>
            <TextInput
                value={props.filtros.PrecoMinimo}
                onChangeText={Preco => props.setFiltros({
                    ...props.filtros,
                    PrecoMinimo: Preco
                })}
                style={styles.input}
                placeholder='Preço minimo'
                placeholderTextColor='#999'
            />
        </View>
        <View style={styles.containerPreco}>
            <TextInput
                value={props.filtros.PrecoMaximo}
                onChangeText={Preco => props.setFiltros({
                    ...props.filtros,
                    PrecoMaximo: Preco
                })}
                style={styles.input}
                placeholder='Preço maximo'
                placeholderTextColor='#999'
            />
        </View>
        <View style={styles.Estoque}>
            <Text >Precisa estar em estoque?</Text>
            <Switch

                ios_backgroundColor="#3e3e3e"
                onValueChange={value => props.setFiltros({
                    ...props.filtros,
                    Estoque: value
                })}
                value={props.filtros.Estoque}
            />
        </View>

        <View style={styles.pickerContainer} >

            <Picker
                style={styles.picker}
                selectedValue={props.filtros.Categoria}
                onValueChange={(itemValue) =>
                    props.setFiltros({
                        ...props.filtros,
                        Categoria: itemValue
                    })
                }>
                <Picker.Item label="Selecione" value="" />
                <Picker.Item label="Eletrodomesticos" value="Eletronicos" />
                <Picker.Item label="Moveis" value="Mobilia" />
                <Picker.Item label="Forja" value="Forja" />
            </Picker>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
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