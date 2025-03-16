// import { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, TextInput } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useSelector, useDispatch } from 'react-redux';
// import { logOut, removeCustomer, setCustomers, updateCustomerBill, updateCustomerBillforAdd } from '../Redux/userSlice';
// import { RootState } from '../Redux';
// import { DrawerScreenProps } from '@react-navigation/drawer';
// import { addData, getCustomerService, getData } from '../services/Services';
// import moment from 'moment';


// type HomePageProps = DrawerScreenProps<any>;

// const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
//     const user = useSelector((state: RootState) => state.user);
//     const dispatch = useDispatch();
//     const [selectedLiters, setSelectedLiters] = useState<{ [key: string]: number }>({});
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredCustomers, setFilteredCustomers] = useState(user.customers);

//   if (user.role === 'Customer') {
//     interface CustomerData {
//         createdAt: string;
//       dayTime: string;
//       quantity: number;
//     }
//     const [data, setData] = useState<CustomerData[]>([]);
    
//     useEffect(() => {
//         getData(user.id).then(res => res && setData(res.data.data));
//       }, []);
  
//       return (
//           <View style={styles.container}>
//             <FlatList
//               data={data}
//               keyExtractor={(item, index) => index.toString()}
//               ListHeaderComponent={
//                   <View style={styles.headerRow}>
//                     <Text style={styles.headerCell}>Date</Text>
//               <Text style={styles.headerCell}>Time</Text>
//               <Text style={styles.headerCell}>Liters</Text>
//             </View>
//           }
//           renderItem={({ item }) => (
//               <View style={styles.row}>
//                 <Text style={styles.cell}>{moment(item.createdAt).format('DD/MM/YYYY')}</Text>
//                 <Text style={styles.cell}>{item.dayTime}</Text>
//                 <Text style={styles.cell}>{item.quantity} Liters</Text>
//               </View>
//             )}
//           />
//         </View>
//       );
//     }
  
//     useEffect(() => {
//         setFilteredCustomers(
//             user.customers.filter((customer) =>
//               customer.fullname.toLowerCase().includes(searchQuery.toLowerCase())
//             )
//           );
//         }, [searchQuery, user.customers]);
      
      
//         const getCustomer = async () => {
//             try {
//                 const res = await getCustomerService(user.id);
//                 if (res) {
//                     const customers = res.data.data;
//                     dispatch(setCustomers(customers));
//                   }
//                 } catch (error) {
//                     Alert.alert('Error', 'Failed to fetch customers');
//                     console.error(error);
//                   }
//                 };
              
//                 useEffect(() => {
//                     getCustomer();
//                   }, []);
                
//                   const doneHandler = async (customerId: string) => {
//                       try {
//       const res = await addData(user.id, customerId, selectedLiters[customerId] || 0);
//       if (!res) {
//           Alert.alert('Error', 'Failed to add data');
//         } else {
//             const updatedTotalBill = user.liters * selectedLiters[customerId];
//             dispatch(updateCustomerBillforAdd({ customerId, totalBill: updatedTotalBill }));
//             Alert.alert('Saved', `Selected ${selectedLiters[customerId] || 0} liters for customer.`);
//           }
//         } catch (error) {
//             Alert.alert('Error', 'Failed to add data');
//           }
//         };
      
//         // For distributor
//         return (
//             <View style={styles.container}>
//               <TextInput
//         style={styles.searchBar}
//         placeholder="Search Customer"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//       />
//       <FlatList
//         data={filteredCustomers}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//             <View style={styles.customerCard}>
//               <View style={styles.customerInfo}>
//                 <Text style={styles.customerName}>{item.fullname}</Text>
//                 <Text>{item.address}</Text>
//               </View>
//             <View style={styles.litersSection}>
//               <View style={styles.pickerContainer}>
//                 <Picker
//                   selectedValue={selectedLiters[item._id] || 0}
//                   style={styles.picker}
//                   onValueChange={(value) =>
//                     setSelectedLiters({ ...selectedLiters, [item._id]: value })
//                   }
//                 >
//                   {[...Array(13)].map((_, i) => (
//                       <Picker.Item key={i} label={(i * 0.25).toString()} value={i * 0.25} />
//                     ))}
//                   </Picker>
//                 </View>
//                 <TouchableOpacity style={styles.saveButton} onPress={() => doneHandler(item._id)}>
//                 <Text style={styles.saveButtonText}>Save</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//         backgroundColor: '#f5f5f5',
//       },
//       searchBar: {
//           height: 40,
//           borderColor: 'grey',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   customerCard: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: 15,
//       marginVertical: 5,
//       backgroundColor: '#ddd',
//     borderRadius: 8,
//   },
//   customerInfo: {
//       flex: 2,
//     },
//     customerName: {
//         fontSize: 20,
//         fontWeight: 'bold',
//       },
//       litersSection: {
//           flex: 1,
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'flex-end',
//         },
//   pickerContainer: {
//       borderWidth: 1,
//       borderColor: '#000',
//       borderRadius: 5,
//       backgroundColor: '#fff',
//       marginRight: 10,
//   },
//   picker: {
//     height: 50,
//     width: 112,
//     fontSize: 18,
//   },
//   saveButton: {
//       backgroundColor: 'blue',
//       paddingVertical: 5,
//       paddingHorizontal: 15,
//       borderRadius: 5,
//     },
//     saveButtonText: {
//         color: 'white',
//         fontWeight: 'bold',
//       },
//       headerRow: {
//           flexDirection: 'row',
//           backgroundColor: '#eee',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   headerCell: {
//       flex: 1,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       fontSize: 18,
//     },
//     row: {
//         flexDirection: 'row',
//         backgroundColor: '#ddd',
//         padding: 12,
//         marginBottom: 5,
//         borderRadius: 5,
//       },
//       cell: {
//           flex: 1,
//           textAlign: 'center',
//           fontSize: 16,
//         },
//       });
      
//       export default HomePage;


import { Text, View, StyleSheet} from "react-native";
      
const HomePage = () => {
        return (
          <View style={styles.container}>

      <Text>HomePage</Text>
    </View>
  );
}

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

export default
HomePage;


