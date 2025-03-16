import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Alert } from 'react-native';
import {logOut} from '../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
 
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(logOut());
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
    Alert.alert('Logging out...');
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* Navigation Items */}
      <DrawerItem
  label="Home"
  onPress={() => props.navigation.navigate('HomePage')} // Updated name
/>
{
        // If the user is an admin, show the admin page
        user.role === 'Distributor' && (
          <DrawerItem
        label="Customer Bill Page"
        onPress={() => props.navigation.navigate('Customer Bill')}
      />
        )  
      }
      <DrawerItem
        label="Profile"
        onPress={() => props.navigation.navigate('Profile')}
      />
      {
        user.role === 'Customer' && (
          <DrawerItem
        label="Details"
        onPress={() => props.navigation.navigate('Details')}
      />
        )  

      }


      {
        // If the user is an admin, show the admin page
        user.role === 'Distributor' && (
          <DrawerItem
        label="Add Customer"
        onPress={() => props.navigation.navigate('Add Customer')}
      />
        )  
      }


      {/*Pages For Admin  */}
      {
        // If the user is an admin, show the admin page
        user.role === 'Admin' && (
          <DrawerItem
        label="Change Password"
        onPress={() => props.navigation.navigate('Change Password')}
      />
        )  
      }

      {
        // If the user is an admin, show the admin page
        user.role === 'Admin' && (
          <DrawerItem
        label="Delete Data"
        onPress={() => props.navigation.navigate('Delete Data')}
      />
        )  
      }
      
      {/* Logout Button */}
      <DrawerItem
        label="Logout"
        onPress={handleLogout}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;