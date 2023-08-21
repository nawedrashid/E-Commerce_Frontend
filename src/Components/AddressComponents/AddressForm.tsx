import React from "react";
import { AddressFormProps } from "../../Types/PropsList";

const AddressForm: React.FC<AddressFormProps> = ({ setShowAddressForm }) => {
  return (
    <div className="p-4 shadow-secondary shadow-md rounded-md">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col w-1/2">
            <label className="text-xl text-secondary font-semibold px-2">
              Full Name
            </label>
            <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
              <input
                placeholder="Enter Full Name"
                className="placeholder-secondary w-full text-secondary font-semibold focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-xl text-secondary font-semibold px-2">
              Phone No.
            </label>
            <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
              <input
                placeholder="Enter Phone No."
                className="placeholder-secondary w-full text-secondary font-semibold focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-secondary font-semibold px-2">
            House no, Building
          </label>
          <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
            <input
              placeholder="Enter Details"
              className="placeholder-secondary w-full text-secondary font-semibold focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-xl text-secondary font-semibold px-2">
            Street, Colony
          </label>
          <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
            <input
              placeholder="Enter Details"
              className="placeholder-secondary w-full text-secondary font-semibold focus:outline-none"
            />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex flex-col w-1/2">
            <label className="text-xl text-secondary font-semibold px-2">
              City
            </label>
            <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
              <input
                placeholder="Enter City"
                className="placeholder-secondary w-full text-secondary font-semibold focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-xl text-secondary font-semibold px-2">
              Pin Code
            </label>
            <div className="flex border border-secondary items-center w-full rounded-md bg-primary brightness-150 px-4 py-2">
              <input
                placeholder="Enter Pin Code"
                className="placeholder-secondary w-full text-secondary font-semibold focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setShowAddressForm(false)}
            className="py-2 px-6 bg-secondary text-primary rounded-md font-bold"
          >
            Save
          </button>
          <button
            onClick={() => setShowAddressForm(false)}
            className="py-2 px-6 text-secondary rounded-md border border-secondary font-bold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
