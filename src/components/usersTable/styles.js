import styled, { css } from "styled-components";

export const Table = styled.table`
  border-radius: 6px 6px 0 0;
  border-collapse: collapse;
  overflow: hidden;
  width: 550px;
  margin-top: 16px;

  box-shadow: 0px 4px 35px -6px #cccccc;
`;

export const THead = styled.thead`
  color: white;
  background-color: #01987a;
`;

export const TBody = styled.tbody`
  tr {
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;
    :last-child {
      border-bottom: 2px solid #01987a;
    }

    :hover {
      background-color: #f3f3f3;
      color: #01987a;
      font-weight: 500;
    }
  }
`;

export const TR = styled.tr``;

export const TH = styled.th`
  text-align: left;
  padding: 12px 16px;
`;

export const TD = styled.td`
  padding: 12px 16px;
`;

export const FilterInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  border: 1px solid #01987a;
  border-radius: 4px;
  overflow: hidden;
`;

export const FilterButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.active ? "#ededed" : "transparent")};

  :hover {
    background-color: #f3f3f3;
  }

  :nth-child(2) {
    img {
      width: 65%;
    }
  }
  img {
    width: 75%;
  }
`;

export const Input = styled.input`
  margin-left: 4px;
  border-radius: 4px;
  border: 1px solid gray;

  :focus-visible {
    outline: none;
    border: 1px solid black;
  }
`;
