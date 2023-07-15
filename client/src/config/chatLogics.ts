export const getSender = (LoggedUser: any, users: any) => {
  return users[0]._id === LoggedUser._id ? users[1].name : users[0].name;
};
export const getSenderFull = (LoggedUser: any, users: any) => {
  return users[0]._id === LoggedUser._id ? users[1] : users[0];
};
