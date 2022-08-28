import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react/cjs/react.production.min';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
          headerShown:false
      });
    }, [])

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <View>
          <Image source={{
              uri:'https://jungleworks.com/wp-content/uploads/2016/11/shutterstock_751658146-2048x1365.jpg'
          }}> </Image>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen