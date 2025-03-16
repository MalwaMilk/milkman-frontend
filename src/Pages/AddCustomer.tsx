// import axios from 'axios';
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../Redux/index';
// import { AddCustomerService } from '../services/Services';
// import { addCustomer } from '../Redux/userSlice';


// const AddCustomer = () => {
//       const dispatch = useDispatch(); // Use dispatch to update Redux state
//       const user = useSelector((state: RootState) => state.user);
//       const [customerName, setCustomerName] = useState('');
//       const [customerMobile, setCustomerMobile] = useState('');
//       const [address, setAddress] = useState('');
//       const mobile = user.mobile;
//       const [loading, setLoading] = useState(false);
    
//       const handleAddCustomer = async () => {
//             try {
//                   setLoading(true);
//                   const res = await AddCustomerService(customerName, customerMobile, address, mobile);
            
//                   if (res && res.data) {
//                         dispatch(addCustomer(res.data));
//                         Alert.alert('Success', 'Customer added successfully!');
//                       } else {
//                             Alert.alert('Error', 'Failed to add customer');
//                           }
//                         } catch (error) {
//                               Alert.alert('Error', 'Something went wrong while adding customer');
//     } finally {
//       setCustomerName('');
//       setCustomerMobile('');
//       setAddress('');
//       setLoading(false);
//     }
//   };

//   const validateAndSubmit = () => {
//         if (!customerName.trim() || !customerMobile.trim() || !address.trim()) {
//               Alert.alert('Error', 'All fields are required!');
//               return;
//             }
//             handleAddCustomer();
//           };
        
//           return (
//                 <View style={styles.container}>
//                   <ScrollView>
//                     <Text style={styles.label}>Customer Name</Text>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Enter Customer Name"
//                       value={customerName}
//                       onChangeText={setCustomerName}
//                     />
//                     <Text style={styles.label}>Customer Mobile Number</Text>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Enter Mobile Number"
//                       value={customerMobile}
//                       keyboardType="phone-pad"
//                       onChangeText={setCustomerMobile}
//                     />
//         <Text style={styles.label}>Address</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Address"
//           value={address}
//           onChangeText={setAddress}
//         />
//         {loading ? <Button title="Adding Customer..." disabled /> : <Button title="Add Customer" onPress={validateAndSubmit} />}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//       container: {
//             flex: 1,
//             padding: 20,
//           },
//   label: {
//     fontSize: 16,
//     marginVertical: 8,
//   },
//   input: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         marginBottom: 12,
//   },
// });

// export default AddCustomer;

import { Text, View } from "react-native"

const AddCustomer = () => {
    return(
        <View>
            <Text>Add Customer</Text>
        </View>
    )
}

export default AddCustomer;
