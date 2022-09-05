export const nameFilterPredicate = (name, searchString) => name.match(searchString);
export const globalFilterPredicate = (user, searchString) =>
  user.firstName.toLowerCase().match(searchString) ||
  user.lastName.toLowerCase().match(searchString) ||
  user.emailAddress.toLowerCase().match(searchString);
