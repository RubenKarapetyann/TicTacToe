import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigation/RootStackNavigation'
import { AuthProvider } from './context/auth-context'
import AuthMiddleware from './middlewares/AuthMiddleware'

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AuthMiddleware>
          <RootStack/>
        </AuthMiddleware>
      </AuthProvider>
    </NavigationContainer>
  )
}