// import axios from 'axios';
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { logIn } from '../Redux/userSlice'; 
// import { useDispatch } from 'react-redux'; 
// import { SignupService } from '../services/Services';

// type RootStackParamList = {
//   Signup: undefined;
//   Home: undefined;
//   Login: undefined;
// };

// type SignupPageProps = NativeStackScreenProps<RootStackParamList, 'Signup'>;

// const SignupPage: React.FC<SignupPageProps> = ({ navigation } : SignupPageProps) => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('');
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch()

//   const handleSignup = async () => {
//     if (!name || !address || !mobile || !password || !userType) {
//       Alert.alert('Error', 'All fields are required!');
//       return;
//     }
//     setLoading(true);

//     try {
//       const res = await SignupService(name, address, mobile, password, userType);

//       if(res) {

//         if (res.status === 201) {
//           // Alert.alert('Success', 'User registered successfully!');
  
//           const userData = res.data.data;
//           Alert.alert('Success', `Welcome, ${res.data.data.fullname}`);
  
//           dispatch(logIn({
//             id: userData._id,
//             name: userData.fullname,
//             mobile: userData.mobile,
//             role: userData.role,
//             address: userData.address,
//             liters: userData.milkPrice,
//             totalBill: userData.totalBill,
//             currentMonthMilk: userData.currentMonthMilk,
//             lastMonthMilk: userData.lastMonthMilk
//           }));
  
//           navigation.replace('Home');
//         } else {
//           Alert.alert('Error', res.data.message || 'Something went wrong!');
//         }

//       }

//     } catch (error) {
//       Alert.alert('Error', 'Failed to register user. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Signup</Text>
//       <ScrollView>  

//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Address"
//         value={address}
//         onChangeText={setAddress}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Mobile Number"
//         value={mobile}
//         onChangeText={setMobile}
//         keyboardType="numeric"
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />

//       <RNPickerSelect
//         onValueChange={setUserType}
//         items={[
//           { label: 'Distributor', value: 'Distributor' },
//           { label: 'Customer', value: 'Customer' },
//         ]}
//         placeholder={{ label: 'Select User Type', value: null }}
//         style={pickerSelectStyles}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>
//           {loading ? 'Loading...' : 'Signup'}
//         </Text>
//       </TouchableOpacity>

//        <TouchableOpacity onPress={() => navigation.replace('Login')}>
//                 <Text style={styles.link}>Already Have a Account? Login </Text>
//         </TouchableOpacity>
//         </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginBottom:20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   link: {
//     color: '#007BFF',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   inputAndroid: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
// };

// export default SignupPage;

import { Text,View,StyleSheet } from "react-native";

const SignupPage = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupPage;
