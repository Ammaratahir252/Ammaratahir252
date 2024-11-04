// Calculator.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import styles from './Components/CalculatorStyles';
 // Ensure this matches the actual file path and name


const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handlePress = (value) => {
    if (value === 'C') {
      setDisplay("0");
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error");
      }
    } else if (value === '+/-') {
      setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display);
    } else {
      setDisplay(display === "0" ? value : display + value);
    }
  };

  const buttons = [
    ['C', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.displayText}>{display}</Text>
      {buttons.map((row, index) => (
        <View key={index} style={styles.row}>
          {row.map((label) => (
            <Button key={label} label={label} onPress={handlePress} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Calculator;
