import { StackNavigator } from 'react-navigation';

//stack
import Catalogo from './../Catalogo';
import Detalle from './../Detalle';

export default AppNavigator = StackNavigator(
  {
    CatalogoScreen: {
      screen: Catalogo,
      navigationOptions:()=>({
        title: "Catalogo"
      })
    },
    DetalleScreen: {
      screen: Detalle        
    }
  },
  {
    initialRouteName: 'CatalogoScreen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#F93B12',
        borderBottomColor: '#F93B12',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: '500',
        fontSize: 25
      }
    }
  }
);
