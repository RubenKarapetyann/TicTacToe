import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStackNavigation'
import { AuthProvider } from './context/auth-context'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootStack/>
      </AuthProvider>
    </NavigationContainer>
  )
}