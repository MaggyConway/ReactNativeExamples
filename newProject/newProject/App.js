import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Card from './components/Card'

export default function App() {
  return (

    <View>
      <ScrollView>
        <Card userName="Маргарита" />
        <Card userName="Светлана"
              userPhoto="https:picsum.photos/id/32/40" 
              photo="https:picsum.photos/id/33/500" />
        <Card userName="Мария"
              userPhoto="https:picsum.photos/40"
              photo="https:picsum.photos/id/20/500" />
        <Card userName="Виолета"
              userPhoto="https:picsum.photos/id/21/40"
              photo="https:picsum.photos/id/37/500" />
        <Card userName="Екатерина"
              userPhoto="https:picsum.photos/id/24/40"
              photo="https:picsum.photos/id/42/500" />
        <Text>Описание фотографии...</Text>
      </ScrollView>
    </View>
  );
}