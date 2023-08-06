import React from "react";
import { UserProps } from "../../Types/PropsList";

const AddressCom: React.FC<UserProps> = ({
  currentAddress,
  userData,
  setCurrentAddress,
}) => {
  return (
      <div className="flex flex-col mx-4 gap-6">
        <div>
          <button className="bg-secondary text-primary rounded-md px-6 py-2">
            Add Address
          </button>
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
              <div className="flex flex-col">
                <div className="text-2xl font-bold">{userData.name}</div>
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
