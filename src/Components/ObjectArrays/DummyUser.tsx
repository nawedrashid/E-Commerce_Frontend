import { User } from "../../Types/Types";

export const dummyData: User = {
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