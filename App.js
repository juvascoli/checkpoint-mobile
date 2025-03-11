import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';
import RenderizarDados from './src/Components/renderizarDados';
 
export default function App() {
  const [valorOriginal, setValorOriginal] = useState(0)
  const [aumento, setAumento] = useState(0)
  const [resultado,setResultado]=useState(0)

 
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require('./assets/calculator.jpg')}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite o valor original do produto: '
        value={valorOriginal}
        onChangeText={(valor) => setValorOriginal(valor)}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite a porcentagem de aumento: '
        maxLength={30}
        value={aumento}
        onChangeText={(valor) => setAumento(valor)}
      />
      <Button
        title='Clique aqui para receber o resultado'
        color={'#000'}
        fontSize={20}
        onPress={()=>setResultado(true)}
      />
      {resultado&&<RenderizarDados  valorOriginal= {valorOriginal} aumento={aumento} resultado={resultado}/>}
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7cfeb',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagem: {
    resizeMode: 'center',
    width: 300,
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 15,
    marginBottom: 20
  }
});
 
 

 
