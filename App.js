import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {

  const [ numero, setNumero ] = useState('00:00:00');
  const [ botao, setBotao ]   = useState('INICIAR');
  const [ ultimo, setUltimo ] = useState(null);
  
  function iniciar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;

      setBotao('INICIAR')
    }else{
      timer = setInterval(()=>{
        ss++;

        if(ss == 60){
          ss = 0;
          mm++;
        }

        if(mm == 60){
          mm = 0;
          hh++;
        }

        let format = (hh < 10 ? '0' + hh : hh) + ':'
          + (mm < 10 ? '0' + mm : mm) + ':' 
          + (ss < 10 ? '0' + ss : ss);


          setNumero(format);

      }, 1000);
      setBotao('PARAR')
    }
  }

  function zerar(){
    if (timer !== null) {
    clearInterval(timer);
    timer = null;
    }
  
    setUltimo(numero);
    setNumero('00:00:00');
    hh = 0;
    mm = 0;
    ss = 0;
    setBotao('INICIAR')
  }
  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.time}> 
        {numero} 
      </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnText}>
            {botao}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={zerar}>
          <Text style={styles.btnText}>
            Zerar  
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaTempo}>
        <Text style={styles.textoTempo}>
          { ultimo ? 'Tempo: ' + ultimo : '' }
        </Text>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },

  time:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  },

  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40
  },

  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 9
  },

  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },

  areaTempo:{
    marginTop: 40
  },

  textoTempo:{
    fontSize: 23,
    color: '#fff',
    fontStyle: 'italic'
  }
})







