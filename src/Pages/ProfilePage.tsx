// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { Picker } from '@react-native-picker/picker';

// import { RootState } from '../Redux/index'; // Adjust the import path as necessary
// import { updateUser } from '../Redux/userSlice'; // Adjust the import path as necessary
// import { EditProfileService, ChangePasswordService } from '../services/Services';

// const ProfilePage: React.FC = () => {
//   const user = useSelector((state: RootState) => state.user);
//   const dispatch = useDispatch();

//   const [isEditable, setIsEditable] = useState(false);
//   const [name, setName] = useState(user.name);
//   const [mobile, setMobile] = useState(user.mobile.toString());
//   const [role, setRole] = useState(user.role);
//   const [address, setAddress] = useState(user.address);
//   const [liters, setLiters] = useState(user.liters ? user.liters.toString() : '');
//   const [isEdited, setIsEdited] = useState(false);
  
//   const [isPasswordEditable, setIsPasswordEditable] = useState(false);
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
  
//   const id = user.id;

//   const handleEditProfile = () => {
//     setIsEditable(true);
//   };

//   const handleSaveProfile = async () => {
//     if (!isEdited) {
//       Alert.alert('No changes made to save.');
//       return;
//     }
//     try {
//       const res = await EditProfileService(
//         name,
//         address,
//         mobile,
//         role,
//         id,
//         role.toLowerCase() === 'distributor' ? liters : undefined
//       );

//       if (res) {
//         Alert.alert('Profile saved successfully!');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to save profile.');
//     }
    
//     dispatch(
//       updateUser({
//         name,
//         mobile: parseInt(mobile),
//         role,
//         address,
//         ...(role.toLowerCase() === 'distributor' && { liters: parseInt(liters) }),
//       })
//     );
//     setIsEditable(false);
//     setIsEdited(false);
//   };

//   const handleEditPassword = () => {
//     setIsPasswordEditable(true);
//   };

//   const handleChangePassword = async () => {
//     if (!currentPassword || !newPassword) {
//       Alert.alert('Error', 'Please enter both current and new password.');
//       return;
//     }
//     try {
//       const res = await ChangePasswordService(id, currentPassword, newPassword);
//       if (res) {
//         Alert.alert('Success', 'Password changed successfully!');
//         setCurrentPassword('');
//         setNewPassword('');
//         setIsPasswordEditable(false);
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to change password.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text style={styles.label}>Name:</Text>
//         <TextInput
//           style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
//           value={name}
//           editable={isEditable}
//           onChangeText={(text) => {
//             setName(text);
//             setIsEdited(true);
//           }}
//         />

//         <Text style={styles.label}>Mobile No:</Text>
//         <TextInput
//           style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
//           value={mobile}
//           keyboardType="numeric"
//           editable={isEditable}
//           onChangeText={(text) => {
//             setMobile(text);
//             setIsEdited(true);
//           }}
//         />

//         <Text style={styles.label}>Role:</Text>
//         {isEditable ? (
//           <Picker
//             selectedValue={role}
//             onValueChange={(itemValue) => {
//               setRole(itemValue);
//               setIsEdited(true);
//             }}
//             style={styles.input}
//           >
//             <Picker.Item label="Distributor" value="Distributor" />
//             <Picker.Item label="Customer" value="Customer" />
//           </Picker>
//         ) : (
//           <TextInput style={[styles.input, styles.nonEditable]} value={role} editable={false} />
//         )}

//         <Text style={styles.label}>Address:</Text>
//         <TextInput
//           style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
//           value={address}
//           editable={isEditable}
//           onChangeText={(text) => {
//             setAddress(text);
//             setIsEdited(true);
//           }}
//         />

//         {role.toLowerCase() === 'distributor' && (
//           <>
//             <Text style={styles.label}>Liters:</Text>
//             <TextInput
//               style={[styles.input, isEditable ? styles.editable : styles.nonEditable]}
//               value={liters}
//               keyboardType="numeric"
//               editable={isEditable}
//               onChangeText={(text) => {
//                 setLiters(text);
//                 setIsEdited(true);
//               }}
//             />
//           </>
//         )}

//         <View style={styles.buttonContainer}>
//           <Button title="Edit Profile" onPress={handleEditProfile} />
//           <Button title="Save Profile" onPress={handleSaveProfile} />
//         </View>

//         <Text style={styles.label}>Current Password:</Text>
//         <TextInput
//           style={[styles.input, isPasswordEditable ? styles.editable : styles.nonEditable]}
//           value={currentPassword}
//           secureTextEntry
//           editable={isPasswordEditable}
//           onChangeText={setCurrentPassword}
//         />

//         <Text style={styles.label}>New Password:</Text>
//         <TextInput
//           style={[styles.input, isPasswordEditable ? styles.editable : styles.nonEditable]}
//           value={newPassword}
//           secureTextEntry
//           editable={isPasswordEditable}
//           onChangeText={setNewPassword}
//         />

//         <View style={styles.buttonContainer}>
//           <Button title="Edit Password" onPress={handleEditPassword} />
//           <Button title="Change Password" onPress={handleChangePassword} />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   label: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
//   input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5 },
//   editable: { backgroundColor: '#fff' },
//   nonEditable: { backgroundColor: '#f0f0f0' },
//   buttonContainer: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' },
// });

// export default ProfilePage;


import { Text,View,StyleSheet } from "react-native";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
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

export default ProfilePage;