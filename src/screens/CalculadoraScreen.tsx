import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/AppTheme';

export const CalculadoraScreen = () => {

  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('5');

  const limpiar = () => {
    setNumero('0');
    // setNumeroAnterior('');
  }

  const armarNumero = ( numeroTexto: string ) => {
    // No aceptar doble punto 
    if ( numero.includes('.') && numeroTexto === '.' ) return;

    // condiciones si inicia con el cero
    if ( numero.startsWith('0') || numero.startsWith('-0')) {
      // si es primero punto decimal
      if ( numeroTexto === '.' ) {
        setNumero( numero + numeroTexto );  

        // evaluar si es el btn q toco es cero y ya hay un punto seleccionado
      } else if ( numeroTexto === '0' && numero.includes('.') ) {
        setNumero( numero + numeroTexto );

        // evaluar si el btn q toco es diferente de cero y siesq no hay un punto ya seleccionado
      } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
        setNumero( numeroTexto );

        // evitar el 0000.0
      } else if ( numeroTexto === '0' && !numero.includes('.') ) {
        setNumero( numero );
        
      } else {
        setNumero( numero + numeroTexto );
      }

    } else {
      setNumero( numero + numeroTexto );
    }
    
  }

  const invertirSigno = () => {
    if ( numero.includes('-') ) {
      setNumero( numero.replace('-', '') );
    } else {
      setNumero( '-' + numero );
    }
  }

  return (
    <View style={ styles.calcContainer }>
      <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
      <Text 
        style={ styles.resultado }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        { numero }
      </Text>

      {/* Fila #1 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='C' color='#9B9B9B' action={ limpiar } />
        <BotonCalc texto='+/-' color='#9B9B9B' action={ invertirSigno } />
        <BotonCalc texto='del' color='#9B9B9B' action={ limpiar } />
        <BotonCalc texto='/' color='#FF9427' action={ limpiar } />
      </View>

      {/* Fila #2 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='7' action={ armarNumero } />
        <BotonCalc texto='8' action={ armarNumero } />
        <BotonCalc texto='9' action={ armarNumero } />
        <BotonCalc texto='x' color='#FF9427' action={ limpiar } />
      </View>

      {/* Fila #3 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='4' action={ armarNumero } />
        <BotonCalc texto='5' action={ armarNumero } />
        <BotonCalc texto='6' action={ armarNumero } />
        <BotonCalc texto='-' color='#FF9427' action={ limpiar } />
      </View>

      {/* Fila #4 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='1' action={ armarNumero } />
        <BotonCalc texto='2' action={ armarNumero } />
        <BotonCalc texto='3' action={ armarNumero } />
        <BotonCalc texto='+' color='#FF9427' action={ limpiar } />
      </View>

      {/* Fila #5 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='0' action={ armarNumero } />
        <BotonCalc texto='.' action={ armarNumero } />
        <BotonCalc texto='=' color='#FF9427' action={ limpiar } />
      </View>

    </View>
  )
}
