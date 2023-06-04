import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screeens/inicio';
import Login from './screeens/login';
import Camara from './screeens/camara';
import Foto from './screeens/foto';
import Acelerometro from './screeens/acelerometro';
import Galeria from './screeens/galeria';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name='Acelerometro'
          component={Acelerometro}
        />
        <Stack.Screen
          name='Galeria'
          component={Galeria}
        />
        <Stack.Screen
          name="Camara"
          component={Camara}
        />
        {/* <Stack.Screen
          name="Foto"
          component={Foto}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}






