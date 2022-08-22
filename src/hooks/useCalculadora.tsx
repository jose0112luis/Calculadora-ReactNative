import { useRef, useState } from 'react';

enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
  
  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const ultimaOperacion = useRef<Operadores>();

  // boton C
  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  }

  // armar el número base
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

  // boton invertir el signo positivo - negativo
  const invertirSigno = () => {
    if ( numero.includes('-') ) {
      setNumero( numero.replace('-', '') );
    } else {
      setNumero( '-' + numero );
    }
  }

  // boton del, eliminar última posición 
  const btnDelete = () => {
    if ((numero.includes('-') && (numero.length === 2)) || (numero.length === 1)) {
      setNumero('0');
    } else {
      setNumero(numero.substring(0, numero.length -1));
    }
  }

  // pasar el número base hacia arriba o al numeroAnterior
  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.') ) {
      setNumeroAnterior( numero.slice(0,-1) );
    } else {
      setNumeroAnterior( numero );
    }
    setNumero('0');
  } 

  // boton dividir
  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  }

  // boton multiplicar
  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  }

  // boton restar
  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  }

  // boton sumar
  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  }

  // calcular el resultado de la operación
  const calcular = () => {
    const num1 = Number( numeroAnterior );
    const num2 = Number( numero );

    switch ( ultimaOperacion.current ) {
      case Operadores.sumar:
        setNumero(`${ num1 + num2 }`);
        break;
        
      case Operadores.restar:
        setNumero(`${ num1 - num2 }`);
        break;
        
      case Operadores.multiplicar:
        setNumero(`${ num1 * num2 }`);
        break;

      case Operadores.dividir:
        setNumero(`${ num1 / num2 }`);
        break;
    }

    setNumeroAnterior('0');
  }

  return {
    numero,
    numeroAnterior,
    armarNumero,
    limpiar,
    invertirSigno,
    btnDelete,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular
  }
}
