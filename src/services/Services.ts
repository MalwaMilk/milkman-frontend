import axios from "axios";
import { Alert } from "react-native";
import { BACKEND_URL } from "@env";


const URL:string = "https://milkman.hikariworks.in";


export const LoginService = async(mobile:string,password:string) =>{
    try{
        const res = await axios.post(`${URL}/api/v1/users/login-user`, {
            mobile: mobile,
            password: password,
          });

          return res;
    }
    catch{
        Alert.alert('Error', 'Login failed');
    }
}

export const SignupService = async(name:string,address:string,mobile:string,password:string,userType:string) =>{
    try{
        const res = await axios.post(`${URL}/api/v1/users/register-user`, {
            fullname: name,
            mobile: mobile,
            address: address,
            role: userType,
            password: password,
          });

          return res;
    }
    catch{
        Alert.alert('Error', 'Failed to register user. Please try again later.');
    }
}

export const EditProfileService = async (
    name: string,
    address: string,
    mobile: string,
    role: string,
    id: string,
    liters?: string
  ) => {
    try {
      // Build the payload with the common fields
      const payload: any = {
        fullname: name,
        mobile: mobile,
        address: address,
        role: role,
      };
  
      // Include liters in the payload only if the role is Distributor
      if (role.toLowerCase() === 'distributor' && liters !== undefined) {
        payload.milkPrice = liters;
      }
  
      const res = await axios.put(`${URL}/api/v1/users/edit-user/${id}`, payload);
      return res;
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    }
};


// export const AddCustomerService = async (
//     customerName: string,
//     customerMobile: string,
//     address: string,
//     mobile: number // Use lowercase `number`
//   ) => {
//     try {
//       const res = await axios.post(`${URL}/api/v1/users/add-customer`, {
//         customerName,
//         customerMobile,
//         address,
//         mobile,
//       });
  
//       console.log('API Response:', res.data); // Debugging log
//       return res; // Ensure response is returned
//     } catch (error) {
//       console.error('Error in AddCustomerService:', error); // Log error for debugging
//       Alert.alert('Error', 'Failed to add customer');
//       return null; // Explicitly return `null` so caller can handle it properly
//     }
//   };

export const getCustomerService = async(id:string) => {
    try {
        const res = await axios.get(`${URL}/api/v1/users/get-allcustomer/${id}`);
        return res;
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch customers');
        console.error(error);
      }
}

export const removeCustomerService = async(id:string, customerId:string) => {
    try {
        const res = await axios.delete(`${URL}/api/v1/users/delete-customer/${id}/${customerId}`);
        return res;
        
    } catch (error) {
        Alert.alert('Error', 'Failed to remove customer');
    }
}

export const addData = async(id:string, customerId:string, liters:Number) => {
    try {
        const res = await axios.post(`${URL}/api/v1/data/add-data`, {
            userId : id,
            milk:liters,
            customerId:customerId
        })
        return res;
    } catch (error) {
        Alert.alert('Error', 'Failed to add data');
    }
}

export const getData = async(customerId:string) => {
    try {
        const res = await axios.get(`${URL}/api/v1/data/get-Data/${customerId}`);
        return res;
    } catch (error) {
        Alert.alert('Error', 'Failed to get data');
    }
}

export const editDataService = async(id:string, milk:Number) => {
    try {
        const res = await axios.put(`${URL}/api/v1/data/edit-data/${id}`, {
            milk
        })
        return res;
    } catch (error) {
        Alert.alert('Error', 'Failed to edit data');
    }
}

export const amountPaidService = async(id:string,amount:Number) => {
    try {
        const res = await axios.put(`${URL}/api/v1/users/amount-paid/${id}`, {
            amount,
        })
        return res;
    } catch (error) {
        throw new Error('Failed to update amount paid');
    }
}

export const ChangePasswordService = async(id:string,currentPassword:string,newPassword:string) => 
{
    try {
        const res = await axios.put(`${URL}/api/v1/users/change-password/${id}`, {
            currentPassword,
            newPassword,
        });
        return res;
    } catch (error) {
        Alert.alert('Error', 'Failed to change password');
    }
}

export const ChangeUserPasswordService = async(id:string,password:string,mobile:Number) =>{
    try {
        const res = await axios.put(`${URL}/api/v1/users/change-user-password/${id}`, {
            mobile,
            password,
        });
        return res;
    } catch (error) {
        Alert.alert('Error', 'Failed to change password');
    }
}

export const DeleteMonthEntryService = async(id:string,month:Number) =>{
    try {
        const res = await axios.delete(`${URL}/api/v1/data/delete-Data-Month/${id}/${month}`);
        return res;
    } catch (error) {
        Alert.alert('Error', 'Failed to delete data');
    }
}