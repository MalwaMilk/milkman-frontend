// import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../Redux';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useEffect, useState, useRef } from 'react';
// import { amountPaidService, removeCustomerService } from '../services/Services';
// import { updateCustomerBill, removeCustomer } from '../Redux/userSlice';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// // Define navigation types
// type RootStackParamList = {
//   CustomerBillPage: undefined;
//   CustomerDetailPage: { customer: any };
// };

// type NavigationProp = StackNavigationProp<RootStackParamList, 'CustomerBillPage'>;

// export default function CustomerBillPage() {
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.user);
//   const navigation = useNavigation<NavigationProp>();

//   const [editingCustomerId, setEditingCustomerId] = useState<string | null>(null);
//   const [amountPaid, setAmountPaid] = useState<{ [key: string]: number }>({});

//   // Store references to Swipeable items
//   const swipeableRefs = useRef<{ [key: string]: Swipeable | null }>({});

//   const handlePaidPress = (customerId: string) => {
//     setEditingCustomerId(customerId);
//   };

//   const handleDonePress = async (customerId: string) => {
//     if (!amountPaid[customerId] || isNaN(amountPaid[customerId]) || amountPaid[customerId] <= 0) {
//       Alert.alert('Error', 'Please enter a valid amount.');
//       return;
//     }

//     try {
//       const res = await amountPaidService(customerId, amountPaid[customerId]);
//       if (res) {
//         dispatch(updateCustomerBill({ customerId, amountPaid: amountPaid[customerId] }));
//         Alert.alert('Success', 'Payment recorded successfully!');
//       } else {
//         Alert.alert('Error', 'Failed to record payment.');
//       }
//       setEditingCustomerId(null);
//       setAmountPaid((prev) => ({ ...prev, [customerId]: 0 }));
//     } catch (error) {
//       Alert.alert('Error', 'Something went wrong. Please try again.');
//     }
//   };

//   const deleteCustomerHandle = async (customerId: string) => {
//     try {
//       const res = await removeCustomerService(user.id, customerId);
//       if (res) {
//         Alert.alert('Success', 'Customer deleted successfully!');
//         dispatch(removeCustomer(customerId));
//       } else {
//         Alert.alert('Error', 'Failed to delete customer.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Something went wrong. Please try again.');
//     }
//   };

//   const renderRightActions = (customerId: string) => (
//     <View style={styles.swipeActions}>
//       <TouchableOpacity style={styles.deleteButton} onPress={() => deleteCustomerHandle(customerId)}>
//         <Text style={styles.buttonText}>Delete</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.cancelButton}
//         onPress={() => swipeableRefs.current[customerId]?.close()} // Close swipeable item
//       >
//         <Text style={styles.buttonText}>Cancel</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   useEffect(() => {}, [user.customers]);

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <FlatList
//         data={user.customers}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <Swipeable
//             ref={(ref) => (swipeableRefs.current[item._id] = ref)} // Store reference
//             renderRightActions={() => renderRightActions(item._id)}
//           >
//             <View style={styles.customerContainer}>
//               <TouchableOpacity
//                 style={styles.leftSection}
//                 onPress={() => navigation.navigate('CustomerDetailPage', { customer: item })}
//               >
//                 <Text style={styles.customerName}>{item.fullname}</Text>
//                 <Text style={styles.customerDetails}>{item.address}</Text>
//                 <Text style={styles.customerDetails}>{item.mobile.toString()}</Text>
//               </TouchableOpacity>
//               <View style={styles.divider} />
//               <View style={styles.rightSection}>
//                 <Text style={styles.amountLabel}>Amount Due</Text>
//                 <Text style={styles.amountValue}>{item.totalBill?.toString() ?? 'N/A'}</Text>
//                 {editingCustomerId === item._id ? (
//                   <>
//                     <TextInput
//                       style={styles.input}
//                       keyboardType="numeric"
//                       placeholder="Enter Amount"
//                       value={amountPaid[item._id] ? amountPaid[item._id].toString() : ''}
//                       onChangeText={(text) =>
//                         setAmountPaid((prev) => ({ ...prev, [item._id]: Number(text) || 0 }))
//                       }
//                     />
//                     <TouchableOpacity style={styles.doneButton} onPress={() => handleDonePress(item._id)}>
//                       <Text style={styles.buttonText}>Done</Text>
//                     </TouchableOpacity>
//                   </>
//                 ) : (
//                   <TouchableOpacity style={styles.paidButton} onPress={() => handlePaidPress(item._id)}>
//                     <Text style={styles.buttonText}>Paid</Text>
//                   </TouchableOpacity>
//                 )}
//               </View>
//             </View>
//           </Swipeable>
//         )}
//       />
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f8f8f8' },
//   customerContainer: {
//     backgroundColor: '#D3D3D3',
//     marginHorizontal: 10,
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginVertical: 8,
//   },
//   leftSection: { flex: 1 },
//   customerName: { fontSize: 18, fontWeight: 'bold' },
//   customerDetails: { fontSize: 14, color: '#333' },
//   divider: { width: 1, height: '100%', backgroundColor: '#000', marginHorizontal: 10 },
//   rightSection: { alignItems: 'center' },
//   amountLabel: { fontSize: 18, fontWeight: 'bold' },
//   amountValue: { fontSize: 18, marginTop: 5 },
//   paidButton: { backgroundColor: 'green', padding: 8, borderRadius: 5, marginTop: 10 },
//   doneButton: { backgroundColor: 'blue', padding: 8, borderRadius: 5, marginTop: 10 },
//   buttonText: { color: 'white', fontWeight: 'bold' },
//   input: { borderWidth: 1, borderColor: 'gray', padding: 5, width: 100, marginTop: 10, textAlign: 'center' },
//   swipeActions: { flexDirection: 'row' },
//   deleteButton: { backgroundColor: 'red', padding: 15, borderRadius: 5, marginRight: 10 },
//   cancelButton: { backgroundColor: 'gray', padding: 15, borderRadius: 5 },
// });


import { Text,View,StyleSheet } from "react-native";

const CustomerBillPage = () => {
  return (
    <View style={styles.container}>
      <Text>Customer Bill Page Page</Text>
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

export default CustomerBillPage;