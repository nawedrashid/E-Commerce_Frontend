import { useState } from "react";
import { Address, User } from "../Types/Types";
import AddressCom from "../Components/AddressComponents/Address";

const UserProfile: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("profile");
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const [currentAddress, setCurrentAddress] = useState<Address>({
    id: "a0",
    address: "abc road xyz colony",
    city: "city0",
    state: "state0",
    pin: 762464,
  });

  const UserData: User = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    totalOrders: 5,
    address: [
      {
        id: "a0",
        address: "abc road xyz colony",
        city: "city0",
        state: "state0",
        pin: 762464,
      },
      {
        id: "a1",
        address: "abc road xyz colony",
        city: "City1",
        state: "State1",
        pin: 826367,
      },
      {
        id: "a2",
        address: "abc road xyz colony",
        city: "City1",
        state: "State1",
        pin: 937537,
      },
    ],
  };

  const handleLogOut = () => {
    setLoggingOut(true);
    setTimeout(() => {
      setLoggingOut(false);
    }, 1000);
  };

  return (
    <div className="h-auto min-h-screen px-6 w-full pt-32">
      <div className="max-w-screen-lg rounded-md shadow-sm shadow-secondary bg-bgrd flex flex-col gap-6 text-secondary mx-auto p-4">
        <div className="flex">
          <button
            className={`flex-1 text-sm  ${
              selectedItem === "profile"
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
            } p-3 shadow-sm transition-colors mx-4 rounded-md `}
            onClick={() => setSelectedItem("profile")}
          >
            Profile
          </button>
          <button
            onClick={() => setSelectedItem("address")}
            className={`flex-1 text-sm  ${
              selectedItem === "address"
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary"
            } p-3 shadow-sm transition-colors mx-4 rounded-md `}
          >
            Address
          </button>
        </div>
        {selectedItem === "profile" ? (
          <div className="flex flex-col gap-4 p-5">
            <p>
              <span className="text-gray-600 me-1">Username:</span>
              <span className="break-all">{UserData.name}</span>
            </p>
            <p>
              {" "}
              <span className="text-gray-600 me-1">Email:</span>{" "}
              <span className="break-all">{UserData.email}</span>
            </p>
            <p>
              <span className="text-gray-600 me-1">Orders:</span>
              <span className="break-all">{UserData.totalOrders}</span>
            </p>
            <hr />
            <button
              disabled={loggingOut}
              className="text-sm bg-secondary mx-auto py-2 px-8 text-primary rounded-md hover:scale-105 duration-300"
              onClick={handleLogOut}
            >
              {loggingOut ? "Logging Out..." : "Logout"}
            </button>
          </div>
        ) : (
          <AddressCom currentAddress={currentAddress} userData={UserData} setCurrentAddress={setCurrentAddress} />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
