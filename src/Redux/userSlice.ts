import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
  _id: string;
  fullname: string;
  mobile: number;
  totalBill: number;
  address: string;
  currentMonthMilk: number;
  lastMonthMilk: number;
}

interface UserState {
  id: string;
  name: string;
  mobile: number;
  loggedIn: boolean;
  customers: Customer[];
  role: string;
  address: string;
  liters: number;
  totalBill: number;
  currentMonthMilk: number;
  lastMonthMilk: number;
  isLogin: boolean;
}

const initialState: UserState = {
  id: '',
  name: '',
  mobile: 0,
  loggedIn: false,
  customers: [],
  role: '',
  address: '',
  liters: 0,
  totalBill: 0,
  currentMonthMilk: 0,
  lastMonthMilk: 0,
  isLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{
        id: string;
        name: string;
        mobile: number;
        role: string;
        address: string;
        liters: number;
        totalBill: number;
        currentMonthMilk: number;
        lastMonthMilk: number;
      }>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.mobile = action.payload.mobile;
      state.role = action.payload.role;
      state.loggedIn = true;
      state.address = action.payload.address;
      state.liters = action.payload.liters;
      state.totalBill = action.payload.totalBill;
      state.currentMonthMilk = action.payload.currentMonthMilk;
      state.lastMonthMilk = action.payload.lastMonthMilk;
      state.isLogin = true;
    },
    logOut: (state) => {
      state.id = '';
      state.name = '';
      state.mobile = 0;
      state.loggedIn = false;
      state.customers = [];
      state.role = '';
      state.address = '';
      state.liters = 0;
      state.totalBill = 0;
      state.currentMonthMilk = 0;
      state.lastMonthMilk = 0;
      state.isLogin = false;
    },
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      state.customers = action.payload;
    },
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
    },
    removeCustomer: (state, action: PayloadAction<string>) => {
      state.customers = state.customers.filter((customer) => customer._id !== action.payload);
    },
    updateUser: (
      state,
      action: PayloadAction<{ name?: string; mobile?: number; role?: string; address?: string; liters?: number }>
    ) => {
      const { name, mobile, role, address, liters } = action.payload;
      if (name !== undefined) state.name = name;
      if (mobile !== undefined) state.mobile = mobile;
      if (role !== undefined) state.role = role;
      if (address !== undefined) state.address = address;
      if (liters !== undefined) state.liters = liters;
    },
    updateCustomerBill: (state, action: PayloadAction<{ customerId: string; amountPaid: number }>) => {
      state.customers = state.customers.map((customer) =>
        customer._id === action.payload.customerId
          ? { ...customer, totalBill: Math.max(0, (customer.totalBill || 0) - action.payload.amountPaid) }
          : customer
      );
    },
    updateCustomerBillforAdd: (state, action: PayloadAction<{ customerId: string; totalBill: number }>) => {
      state.customers = state.customers.map((customer) =>
        customer._id === action.payload.customerId
          ? { ...customer, totalBill: action.payload.totalBill }
          : customer
      );
    },
  },
});

export const { logIn, logOut, setCustomers, addCustomer, removeCustomer, updateUser, updateCustomerBill,updateCustomerBillforAdd } =
  userSlice.actions;
export default userSlice.reducer;
