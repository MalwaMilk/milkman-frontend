// import React, { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { useSelector } from 'react-redux';
// import { RootState } from '../Redux';
// import { ChangeUserPasswordService } from '../services/Services';

// const ChangePassword = () => {
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [password, setPassword] = useState('');
//     const user = useSelector((state: RootState) => state.user);


//     const ChangePasswordHandler = async() => {
//         if (!mobileNumber.trim() || !password.trim()) {
//             Alert.alert("Error", "Both fields are required");
//             return;
//         }

//         const res = await ChangeUserPasswordService(user.id,password,Number(mobileNumber));
//         if(res){
//             Alert.alert('Success', 'Password changed successfully');
//             setPassword('');
//             setMobileNumber('');
//         }

//         // API call logic here
//         console.log("Changing password for:", mobileNumber);
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Change Password</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter Mobile Number"
//                 keyboardType="numeric"
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter New Password"
//                 secureTextEntry
//                 value={password}
//                 onChangeText={setPassword}
//             />
//             <TouchableOpacity style={styles.button} onPress={ChangePasswordHandler}>
//                 <Text style={styles.buttonText}>Change Password</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     input: {
//         width: '100%',
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 15,
//     },
//     button: {
//         backgroundColor: 'blue',
//         padding: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//         width: '100%',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default ChangePassword;


import { Text,View,StyleSheet } from "react-native";

const ChangePassword = () => {
  return (
    <View style={styles.container}>
      <Text>Change Password Page</Text>
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

export default ChangePassword;