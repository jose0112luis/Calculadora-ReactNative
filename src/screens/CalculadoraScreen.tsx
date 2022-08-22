import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={ styles.calcContainer }>
      <Text style={ styles.resultadoPequeno }>1,500.00</Text>
      <Text style={ styles.resultado }>1,500.00</Text>

      <View>
        {/* Boton */}
        <View style={ styles.boton }>
          <Text style={ styles.btnTexto }>1</Text>
        </View>
      </View>

    </View>
  )
}
