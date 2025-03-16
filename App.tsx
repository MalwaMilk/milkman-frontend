import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux';


import LoginPage from './src/Pages/LoginPage';
import SignupPage from './src/Pages/SignupPage';
import HomePage from './src/Pages/HomePage';
import CustomerBillPage from './src/Pages/CustomerBillPage';
import CustomerDetailPage from './src/Pages/CustomerDetailPage';
import ProfilePage from './src/Pages/ProfilePage';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import AddCustomer from './src/Pages/AddCustomer';
import Details from './src/Pages/Details';
import ChangePassword from './src/Pages/ChangePassword';
import DeleteData from './src/Pages/DeleteData';
import ForgetPassword from './src/Pages/ForgetPassword';

// Define the navigation stack types
type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  CustomerDetailPage: { customer: any }; // Pass customer data
  ForgetPassword: undefined;
};

type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

// Welcome Screen
const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome</Text>
    <Button title="Get Started" onPress={() => navigation.replace('Login')} />
  </View>
);

// Drawer Navigator
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      {/* Rename "Home" to "HomePage" */}
      <Drawer.Screen name="HomePage" component={HomePage} options={{ headerShown: true }} />
      
      <Drawer.Screen name="Customer Bill" component={CustomerBillPage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
      <Drawer.Screen name="Add Customer" component={AddCustomer} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Change Password" component={ChangePassword} />
      <Drawer.Screen name="Delete Data" component={DeleteData} />
    </Drawer.Navigator>
  );
};


// Main App with Stack Navigation
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Signup" component={SignupPage} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          
          {/* Drawer Navigator (Contains Home and other drawer screens) */}
          <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />

          {/* Standalone Screen for Customer Details */}
          <Stack.Screen name="CustomerDetailPage" component={CustomerDetailPage} options={{ title: 'Customer Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;