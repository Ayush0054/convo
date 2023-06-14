// Type for user input while making api call to log the user in
export type LoginParams = {
  email: string;
  password: string;
};

// Type for user input while making api call to signup the user
export type SignupParams = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img: string;
};
