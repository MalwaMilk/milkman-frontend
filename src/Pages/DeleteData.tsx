// import React, { useState } from "react";
// import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
// import { DeleteMonthEntryService } from "../services/Services";
// import { useSelector } from "react-redux";
// import { RootState } from "../Redux";

// const DeleteData = () => {
//     const [month, setMonth] = useState("");
//     const user = useSelector((state: RootState) => state.user);

//     const DeleteDataHandler = async() => {
//         if (!month.trim()) {
//             Alert.alert("Validation Error", "Month field cannot be empty");
//             return;
//         }

//         const res = await DeleteMonthEntryService(user.id,Number(month));
//         if(res){
//             Alert.alert("Success","Data deleted successfully");
//             setMonth("");
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Enter Month:</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="e.g. January"
//                 value={month}
//                 onChangeText={setMonth}
//             />
//             <Button title="Delete Data" onPress={DeleteDataHandler} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         padding: 20,
//     },
//     label: {
//         fontSize: 18,
//         marginBottom: 5,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: "#ccc",
//         padding: 10,
//         borderRadius: 5,
//         marginBottom: 15,
//     },
// });

// export default DeleteData;

import { Text,View,StyleSheet } from "react-native";

const DeleteData = () => {
  return (
    <View style={styles.container}>
      <Text>DElete Customer Page</Text>
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

export default DeleteData;
