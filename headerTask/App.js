import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header.js'

export default function App() {
   return (
      <Header deliveryAdress="Котельщиков, 2, кв. 10" deliveryTime="17:35" />
   );
}
