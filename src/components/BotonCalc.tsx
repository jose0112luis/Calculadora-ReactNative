import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/AppTheme';

interface Props {
  texto: string,
  color?: string,
  action: ( numeroTexto: string ) => void,
}

export const BotonCalc = ( { texto, color = '#2D2D2D', action }: Props ) => {
  return (
    <TouchableOpacity activeOpacity={ 0.45 } onPress={ () => action( texto ) }>
      <View style={{ 
        ...styles.boton, 
        backgroundColor: color,
        width: (texto === '0') ? 180 : 80
      }}>
        <Text style={{ 
          ...styles.btnTexto,
          color: (color === '#9B9B9B') ? 'black' : 'white'
        }}>
          { texto }
        </Text>
      </View>
    </TouchableOpacity>
  )
}
