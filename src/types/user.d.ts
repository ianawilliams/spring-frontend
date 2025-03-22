export type Address = {
  first: string;
}

export type UserInput = {
  name: string;
  age: number;
  address: Address;
};

export type UserItem = {
  id: string;
  name: string;
  points: number;
}

export type User = UserInput & {
  id: string;
  points: number;
};
