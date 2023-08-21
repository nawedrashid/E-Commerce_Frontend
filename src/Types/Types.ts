export type NavEle = {
  id: number;
  name: string;
  link: string;
};

export type FLinks = {
  id: number;
  name: string;
  link: string;
};

export type FSocials = {
  id: number;
  child: JSX.Element;
  link: string;
};

export type Trending = {
  id: number;
  child: JSX.Element;
  name: string;
  discount: string;
  mPrice: number;
  dPrice: number;
  rating: number;
  category: string;
};

export type Categories = {
  id: number;
  name: string;
  child: JSX.Element;
};

export type Products = {
  id: number;
  name: string;
  child: JSX.Element;
  mPrice: number;
  dPrice: number;
  rating: number;
  category: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  totalOrders: number;
  address: Array<Address>;
};

export type Address = {
  id: string;
  address: string;
  city: string;
  state: string;
  pin: number;
};

export type CartItems = {
  id: number;
  name: string;
  child: JSX.Element;
  mPrice: number;
  dPrice: number;
};
