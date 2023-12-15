import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStackNavigation'

export default function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  )
}