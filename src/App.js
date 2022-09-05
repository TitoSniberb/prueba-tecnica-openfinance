import { useCallback, useState } from "react";
import UsersTable from "./components/usersTable";
import users from "./lib/mocks/data.json";
import { firstLetterUppercase } from "./lib/utils/stringFormatters";
import styled from "styled-components";

const MainContainer = styled.div`
  padding: 32px;
`;

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const UserInfo = useCallback(() => {
    return (
      <div>
        <h3>Full user data</h3>

        <div>ID: {selectedUser.userId}</div>
        <div>Name: {firstLetterUppercase(selectedUser.firstName)}</div>
        <div>Lastname: {firstLetterUppercase(selectedUser.lastName)}</div>
        <div>Email: {selectedUser.emailAddress}</div>
        <div>Phone number: {selectedUser.phoneNumber}</div>
      </div>
    );
  }, [selectedUser]);

  const onRowClick = (id) => {
    const user = users.find((user) => user.userId === id);

    setSelectedUser(user);
  };

  return (
    <MainContainer>
      <UsersTable users={users} onRowClick={onRowClick} />

      {selectedUser && <UserInfo selectedUser={selectedUser} />}
    </MainContainer>
  );
};

export default App;
