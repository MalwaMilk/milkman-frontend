// // import React, { useEffect, useState } from 'react';
// // import { View, Text, StyleSheet, Alert, FlatList, TouchableOpacity, TextInput } from 'react-native';
// // import { getData, editDataService } from '../services/Services';
// // import { useSelector } from 'react-redux';
// // import { RootState } from '../Redux';
// // import moment from 'moment';


// // export default function CustomerDetailPage({ route }: any) {
// //   const { customer } = route.params;
// //   const user = useSelector((state: RootState) => state.user);
// //   const [data, setData] = useState<any>([]);
// //   const [editingId, setEditingId] = useState<string | null>(null);
// //   const [editedValue, setEditedValue] = useState<{ [key: string]: string }>({});

// //   const getUserData = async () => {
//     //     try {
//         //       const res = await getData(customer._id);
//         //       if (res) {
//             //         setData(res.data.data);
//             //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'Failed to fetch data');
// //     }
// //   };

// //   useEffect(() => {
//     //     getUserData();
//     //   }, []);
    
//     //   const editData = async (id: string) => {
//         //     if (editingId === id) {
//             //       const res = await editDataService(id, Number(editedValue[id]));
//             //       if (res) {
//                 //         Alert.alert('Updated', `Liters updated to: ${editedValue[id]}`);
//                 //       }
//                 //       setEditingId(null);
//                 //     } else {
//                     //       setEditingId(id);
//                     //       setEditedValue((prev) => ({
//                         //         ...prev,
//                         //         [id]: data.find((item: any) => item._id === id)?.quantity.toString() || '',
//                         //       }));
//                         //     }
//                         //   };
                        
//                         //   return (
//                             //     <FlatList
//                             //       data={data}
//                             //       keyExtractor={(item) => item._id}
//                             //       ListHeaderComponent={
//                                 //         <View style={styles.container}>
//                                 //           <Text style={styles.title}>{customer.fullname}</Text>
//                                 //           <Text style={styles.detail}>📍 {customer.address}</Text>
//                                 //           <Text style={styles.detail}>📞 {customer.mobile}</Text>
//                                 //           <Text style={[styles.detail, styles.totalBill]}>
//                                 //             💰 Total Bill: ₹{customer.totalBill?.toFixed(2) ?? 'N/A'}
//                                 //           </Text>
                                
//                                 //           <View style={styles.infoCard}>
//                                 //             <Text style={styles.sectionTitle}>Last Month Summary</Text>
//                                 //             <View style={styles.row}>
//                                 //               <Text style={styles.label}>Milk:</Text>
//                                 //               <Text style={styles.value}>{customer.lastMonthMilk?.toFixed(2) ?? 'N/A'} L</Text>
//                                 //             </View>
//                                 //             <View style={styles.row}>
//                                 //               <Text style={styles.label}>Bill:</Text>
//                                 //               <Text style={styles.value}>
//                                 //                 ₹{(Number(customer.lastMonthMilk) * Number(user.liters)).toFixed(2) ?? 'N/A'}
//                                 //               </Text>
//                                 //             </View>
//                                 //           </View>
                                
//                                 //           <View style={styles.infoCard}>
//                                 //             <Text style={styles.sectionTitle}>Current Month Summary</Text>
//                                 //             <View style={styles.row}>
//                                 //               <Text style={styles.label}>Milk:</Text>
//                                 //               <Text style={styles.value}>{customer.currentMonthMilk?.toFixed(2) ?? 'N/A'} L</Text>
//                                 //             </View>
//                                 //             <View style={styles.row}>
//                                 //               <Text style={styles.label}>Bill:</Text>
//                                 //               <Text style={styles.value}>
//                                 //                 ₹{(Number(customer.currentMonthMilk) * Number(user.liters)).toFixed(2) ?? 'N/A'}
//                                 //               </Text>
//                                 //             </View>
//                                 //           </View>
                                
//                                 //           <View style={styles.tableHeader}>
//                                 //             <Text style={styles.headerText}>Date</Text>
//                                 //             <Text style={styles.headerText}>Time</Text>
//                                 //             <Text style={styles.headerText}>Liters</Text>
//                                 //             <Text style={styles.headerText}>Action</Text>
//                                 //           </View>
//                                 //         </View>
//                                 //       }
//                                 //       renderItem={({ item }) => (
//                                     //         <View style={styles.tableRow}>
//                                     //           <Text style={styles.dataText}>{moment(item.createdAt).format('DD/MM/YYYY')}</Text>
//                                     //           <Text style={styles.dataText}>{item.dayTime}</Text>
                                    
//                                     //           {editingId === item._id ? (
// //             <TextInput
// //               style={styles.input}
// //               value={editedValue[item._id]}
// //               onChangeText={(text) => setEditedValue((prev) => ({ ...prev, [item._id]: text }))}
// //               keyboardType="numeric"
// //               clearButtonMode="always"
// //             />
// //           ) : (
//     //             <Text style={styles.dataText}>{item.quantity}</Text>
//     //           )}
    
//     //           <TouchableOpacity style={styles.editButton} onPress={() => editData(item._id)}>
//     //             <Text style={styles.editButtonText}>{editingId === item._id ? 'Done' : 'Edit'}</Text>
//     //           </TouchableOpacity>
//     //         </View>
//     //       )}
//     //     />
//     //   );
//     // }
    
//     // const styles = StyleSheet.create({
// //   container: {
//     //     padding: 20,
//     //     backgroundColor: '#f8f9fa',
//     //   },
//     //   title: {
//         //     fontSize: 30,
//         //     fontWeight: 'bold',
//         //     color: '#333',
//         //     marginBottom: 12,
//         //     textAlign: 'center',
//         //   },
//         //   detail: {
//             //     fontSize: 18,
//             //     color: '#555',
//             //     textAlign: 'center',
//             //     marginBottom: 6,
//             //   },
//             //   tableHeader: {
//                 //     flexDirection: 'row',
//                 //     justifyContent: 'space-between',
//                 //     backgroundColor: '#ddd',
//                 //     padding: 10,
//                 //     borderRadius: 10,
//                 //     marginTop: 20,
//                 //   },
//                 //   headerText: {
//                     //     fontSize: 16,
//                     //     fontWeight: 'bold',
//                     //     flex: 1,
//                     //     textAlign: 'center',
//                     //   },
//                     //   tableRow: {
//                         //     flexDirection: 'row',
//                         //     justifyContent: 'space-between',
//                         //     padding: 10,
//                         //     backgroundColor: '#eee',
//                         //     marginTop: 5,
//                         //     borderRadius: 8,
//                         //     alignItems: 'center',
//                         //   },
//                         //   dataText: {
//                             //     fontSize: 16,
//                             //     flex: 1,
//                             //     textAlign: 'center',
// //   },
// //   input: {
//     //     flex: 1,
//     //     borderBottomWidth: 1,
//     //     borderBottomColor: '#000',
//     //     fontSize: 16,
//     //     textAlign: 'center',
//     //   },
//     //   editButton: {
//         //     backgroundColor: '#007bff',
//         //     paddingVertical: 5,
//         //     paddingHorizontal: 15,
//         //     borderRadius: 5,
//         //   },
//         //   editButtonText: {
//             //     color: '#fff',
//             //     fontWeight: 'bold',
//             //   },
//             //   totalBill: {
//                 //     fontSize: 22,
//                 //     fontWeight: 'bold',
//                 //     color: '#28a745',
//                 //     marginTop: 12,
//                 //   },
//                 //   infoCard: {
//                     //     backgroundColor: '#fff',
//                     //     padding: 18,
//                     //     borderRadius: 14,
//                     //     marginVertical: 12,
//                     //     shadowColor: '#000',
//                     //     shadowOpacity: 0.12,
//                     //     shadowRadius: 6,
//                     //     elevation: 4,
//                     //   },
//                     //   sectionTitle: {
//                         //     fontSize: 22,
//                         //     fontWeight: 'bold',
//                         //     color: '#007bff',
//                         //     marginBottom: 10,
//                         //     textAlign: 'center',
//                         //   },
//                         //   row: {
//                             //     flexDirection: 'row',
//                             //     justifyContent: 'space-between',
//                             //     marginBottom: 6,
//                             //   },
//                             //   label: {
//                                 //     fontSize: 18,
// //     fontWeight: '500',
// //     color: '#444',
// //   },
// //   value: {
//     //     fontSize: 18,
//     //     fontWeight: 'bold',
//     //     color: '#222',
//     //   },
//     // });
    
// import { Text, View, StyleSheet } from "react-native"
//     const CustomerDetailPage = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Customer Detail Page</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#f5f5f5',
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//     },
//   });

//   export default CustomerDetailPage;
  

import { Text,View,StyleSheet } from "react-native";

const CustomerDetailPage = () => {
  return (
    <View style={styles.container}>
      <Text>Customer Detail Page</Text>
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

export default CustomerDetailPage;