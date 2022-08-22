import React from 'react';
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={ styles.calcContainer }>
      <Text style={ styles.resultadoPequeno }>1,500.00</Text>
      <Text style={ styles.resultado }>1,500.00</Text>

      {/* Fila #1 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='C' color='#9B9B9B' />
        <BotonCalc texto='+/-' color='#9B9B9B' />
        <BotonCalc texto='del' color='#9B9B9B' />
        <BotonCalc texto='/' color='#FF9427' />
      </View>

      {/* Fila #2 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='7' />
        <BotonCalc texto='8' />
        <BotonCalc texto='9' />
        <BotonCalc texto='x' color='#FF9427' />
      </View>

      {/* Fila #3 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='4' />
        <BotonCalc texto='5'  />
        <BotonCalc texto='6' />
        <BotonCalc texto='-' color='#FF9427' />
      </View>

      {/* Fila #4 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='1' />
        <BotonCalc texto='2'  />
        <BotonCalc texto='3' />
        <BotonCalc texto='+' color='#FF9427' />
      </View>

      {/* Fila #5 de botones */}
      <View style={ styles.fila }>
        <BotonCalc texto='0' />
        <BotonCalc texto='.' />
        <BotonCalc texto='=' color='#FF9427' />
      </View>

    </View>
  )
}
