export type Address = {
  first: string;
}

export type UserInput = {
  name: string;
  age: number;
  address: Address;
};

export type UserItem = {
  id: number;
  name: string;
  points: number;
}

export type User = UserInput & {
  id: number;
  points: number;
};
