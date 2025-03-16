// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { useSelector } from 'react-redux';
// import { RootState } from '../Redux';
// import { Card } from 'react-native-paper';

// const Details = () => {
//     const user = useSelector((state: RootState) => state.user);
    
//     return (
//         <View style={styles.container}>
//             <Card style={styles.card}>
//                 <Card.Content>
//                     <Text style={styles.title}>User Details</Text>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.label}>Name:</Text>
//                         <Text style={styles.value}>{user.name}</Text>
//                     </View>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.label}>Mobile No.:</Text>
//                         <Text style={styles.value}>{user.mobile?.toString()}</Text>
//                     </View>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.label}>Address:</Text>
//                         <Text style={styles.value}>{user.address}</Text>
//                     </View>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.label}>Total Bill:</Text>
//                         <Text style={styles.value}>₹{user.totalBill?.toString()}</Text>
//                     </View>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.label}>Current Month Milk:</Text>
//                         <Text style={styles.value}>{user.currentMonthMilk?.toString()} L</Text>
//                     </View>
//                     <View style={styles.detailRow}>
//                         <Text style={styles.label}>Last Month Milk:</Text>
//                         <Text style={styles.value}>{user.lastMonthMilk?.toString()} L</Text>
//                     </View>
//                 </Card.Content>
//             </Card>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f8f9fa',
//         padding: 20,
//     },
//     card: {
//         width: '90%',
//         padding: 10,
//         backgroundColor: 'white',
//         elevation: 5,
//         borderRadius: 10,
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 10,
//         textAlign: 'center',
//         color: '#333',
//     },
//     detailRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 8,
//         paddingVertical: 5,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#555',
//     },
//     value: {
//         fontSize: 16,
//         color: '#222',
//     }
// });

// export default Details;

import { Text,View,StyleSheet } from "react-native";

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Details Page</Text>
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

export default Details;