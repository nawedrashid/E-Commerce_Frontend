import { Address, User } from "./Types";

export type cartProp = {
  cartItem: {
    id: number;
    name: string;
    child: JSX.Element;
    mPrice: number;
    dPrice: number;
    category: string;
  };
};

export type UserProps = {
  currentAddress: Address;
  userData: User;
  setCurrentAddress: (address: Address) => void;
};

export type AddressFormProps = {
  setShowAddressForm: (value: boolean) => void;
};

export type UserProviderProps = {
    children: React.ReactNode
};
