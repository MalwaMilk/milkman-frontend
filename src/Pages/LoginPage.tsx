// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { useDispatch } from 'react-redux'; 
// import { logIn } from '../Redux/userSlice'; 
// import { LoginService } from '../services/Services';

// type RootStackParamList = {
//   Login: undefined;
//   Signup: undefined;
//   Home: undefined;
//   ForgetPassword: undefined;
// };

// type LoginPageProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

// const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch(); 

//   const Login = async () => {
//     if (!mobile || !password) {
//       Alert.alert('Error', 'Please fill in all fields');
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await LoginService(mobile, password);

//       if (res && res.status === 200) {
//         // Alert.alert('Success', 'Login successful');

//         // Assuming response contains user data in res.data.user
//         const userData = res.data.data;
//         // Alert.alert('Success', `Welcome back, ${res.data.data.fullname}`);
        

//         // Dispatch logIn action with user data
//         dispatch(logIn({
//           id: userData._id,
//           name: userData.fullname,
//           mobile: userData.mobile,
//           role: userData.role,
//           address: userData.address,
//           liters: userData.milkPrice,
//           totalBill: userData.totalBill,
//           currentMonthMilk: userData.currentMonthMilk,
//           lastMonthMilk: userData.lastMonthMilk
//         }));

//         navigation.replace('Home');
//       } else {
//         Alert.alert('Error', 'Login failed');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Login failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.innerContainer}>
//         <Text style={styles.title}>Login</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Mobile Number"
//           placeholderTextColor="#888"
//           keyboardType="numeric"
//           value={mobile}
//           onChangeText={setMobile}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#888"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity style={styles.button} onPress={Login}>
//           <Text style={styles.buttonText}>
//             {loading ? 'Loading...' : 'Login'}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.replace('Signup')}>
//           <Text style={styles.link}>Don't have an account? Sign Up</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.forget} onPress={() => navigation.push('ForgetPassword')}>
//           <Text style={styles.link}>Forget Password</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   innerContainer: {
//     width: '90%',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 5,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#333',
//     textAlign: 'center',
//   },
//   input: {
//     width: '100%',
//     height: 48,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//     fontSize: 16,
//   },
//   button: {
//     width: '100%',
//     height: 48,
//     backgroundColor: '#007BFF',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   link: {
//     color: '#007BFF',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   forget: {
//     marginTop: 10,
//   },
// });

// export default LoginPage;

import { Text,View,StyleSheet } from "react-native";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
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

export default LoginPage;
