import React, { useState } from "react";
import { UserProps } from "../../Types/PropsList";
import AddressForm from "./AddressForm";

const AddressCom: React.FC<UserProps> = ({
  currentAddress,
  userData,
  setCurrentAddress,
}) => {
  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);

  return (
    <div className="flex flex-col mx-4 gap-6">
      <div>
        {showAddressForm ? (
          <AddressForm setShowAddressForm={setShowAddressForm} />
        ) : (
          <button
            onClick={() => setShowAddressForm(true)}
            className="bg-secondary text-primary rounded-md px-6 py-2"
          >
            Add Address
          </button>
        )}
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        {userData.address.map((address) => (
          <div className="rounded-md shadow-sm p-4 shadow-secondary bg-bgrd flex gap-4 md:w-2/3 w-full h-min">
            <input
              type="radio"
              name="address"
              className="accent-current me-2"
              checked={currentAddress.id === address.id}
              onChange={() => setCurrentAddress(address)}
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="text-2xl font-bold">{userData.name}</div>
                <button className="bg-secondary text-primary px-6 py-2 rounded-md">
                  Edit
                </button>
              </div>
              <div>{address.address}</div>
              <div>
                {address.city}, {address.state}
              </div>
              <div>Pin: {address.pin}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressCom;
