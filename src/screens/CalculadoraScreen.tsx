import React from 'react';
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/AppTheme';

import { useCalculadora } from '../hooks/useCalculadora'

export const CalculadoraScreen = () => {

  const { 
    numero, numeroAnterior, 
    armarNumero, limpiar, invertirSigno, btnDelete, 
    btnSumar, btnRestar, btnMultiplicar, btnDividir,
    calcular
  } = useCalculadora();

  
  // retorna JSX
  return (
    <View style={ styles.calcContainer }>
      {
        ( numeroAnterior !== '0' ) && (
          <Text style={ styles.resultadoPequeno }>{ numeroAnterior }</Text>
        )
      }
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
        <BotonCalc texto='del' color='#9B9B9B' action={ btnDelete } />
        <BotonCalc texto='/' color='#FF9427' action={ btnDividir } />
      </View>

      {/* Fila #2 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='7' action={ armarNumero } />
        <BotonCalc texto='8' action={ armarNumero } />
        <BotonCalc texto='9' action={ armarNumero } />
        <BotonCalc texto='x' color='#FF9427' action={ btnMultiplicar } />
      </View>

      {/* Fila #3 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='4' action={ armarNumero } />
        <BotonCalc texto='5' action={ armarNumero } />
        <BotonCalc texto='6' action={ armarNumero } />
        <BotonCalc texto='-' color='#FF9427' action={ btnRestar } />
      </View>

      {/* Fila #4 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='1' action={ armarNumero } />
        <BotonCalc texto='2' action={ armarNumero } />
        <BotonCalc texto='3' action={ armarNumero } />
        <BotonCalc texto='+' color='#FF9427' action={ btnSumar } />
      </View>

      {/* Fila #5 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='0' action={ armarNumero } />
        <BotonCalc texto='.' action={ armarNumero } />
        <BotonCalc texto='=' color='#FF9427' action={ calcular } />
      </View>

    </View>
  )
}
