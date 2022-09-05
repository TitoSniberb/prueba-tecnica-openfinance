import React, { Fragment, useState } from "react";
import { firstLetterUppercase } from "../../lib/utils/stringFormatters";
import { FilterButton, FilterInputContainer, ButtonsContainer, Input, Table, TBody, TD, TH, THead, TR } from "./styles";
import { nameFilterPredicate, globalFilterPredicate } from "../../lib/utils/filters";
import globalIcon from "../../lib/assets/icons/global.png";
import globalActiveIcon from "../../lib/assets/icons/globalActive.png";
import userIcon from "../../lib/assets/icons/user.png";
import userActiveIcon from "../../lib/assets/icons/userActive.png";

const Row = ({ user, onRowClick }) => (
  <TR onClick={() => onRowClick(user.userId)}>
    <TD>{user.userId}</TD>
    <TD>{firstLetterUppercase(user.firstName)}</TD>
    <TD>{firstLetterUppercase(user.lastName)}</TD>
    <TD>{user.emailAddress}</TD>
  </TR>
);

const UsersTable = ({ users, onRowClick }) => {
  const [isGlobal, setIsGlobal] = useState(false);
  const [searchString, setSearchString] = useState("");

  return (
    <Fragment>
      <FilterInputContainer>
        <span>Filter {isGlobal ? "all fields" : "by name"}</span>

        <div>
          <ButtonsContainer>
            <FilterButton active={isGlobal} onClick={() => setIsGlobal(true)}>
              <img src={isGlobal ? globalActiveIcon : globalIcon} alt="global" />
            </FilterButton>

            <FilterButton active={!isGlobal} onClick={() => setIsGlobal(false)}>
              <img src={isGlobal ? userIcon : userActiveIcon} alt="name" />
            </FilterButton>
          </ButtonsContainer>

          <Input type="text" onChange={(e) => setSearchString(e.target.value)} value={searchString} />
        </div>
      </FilterInputContainer>

      <Table>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>Name</TH>
            <TH>Lastname</TH>
            <TH>Email</TH>
          </TR>
        </THead>

        <TBody>
          {users
            .filter((user) =>
              !isGlobal
                ? nameFilterPredicate(user.firstName.toLowerCase(), searchString.toLowerCase())
                : globalFilterPredicate(user, searchString.toLowerCase())
            )
            .map((user) => (
              <Row key={user.userId} user={user} onRowClick={onRowClick} />
            ))}
        </TBody>
      </Table>
    </Fragment>
  );
};

export default UsersTable;
