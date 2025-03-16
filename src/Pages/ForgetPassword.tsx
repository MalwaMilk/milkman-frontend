// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// // Define the type for each item in the list
// type Contact = {
//   id: string;
//   name: string;
//   mobile: string;
// };

// // Sample data
// const DATA: Contact[] = [
//   { id: '1', name: 'Prem Kumar Jawariya', mobile: '9907116878' },
//   { id: '2', name: 'Sumit Choudhary', mobile: '9691665297' },
// ];

// // Component for each item
// const Item: React.FC<Contact> = ({ name, mobile }) => (
//   <View style={styles.item}>
//     <Text style={styles.name}>{name}</Text>
//     <Text style={styles.mobile}>{mobile}</Text>
//   </View>
// );

// const ForgetPassword: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={DATA}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <Item {...item} />}
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//   },
//   item: {
//     backgroundColor: '#d3d3d3',
//     padding: 15,
//     marginVertical: 8,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   mobile: {
//     fontSize: 14,
//     color: 'black',
//   },
// });

// export default ForgetPassword;

import { Text,View,StyleSheet } from "react-native";

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Text>Forget Password Page</Text>
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

export default ForgetPassword;
