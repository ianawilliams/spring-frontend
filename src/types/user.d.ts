export type Address = {
  address: string;
}

export type UserInput = {
  name: string;
  age: number;
  address: Address;
};

export type User = UserInput & {
  id: number;
  points: number;
};
