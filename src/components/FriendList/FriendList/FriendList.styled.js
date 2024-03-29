import styled from '@emotion/styled';

export const FriendMenu = styled.ul`
  width: 400px;
  margin: 0 auto;
  margin-bottom: 30px;
  list-style: none;
  padding-left: 0;
`;

export const FriendItem = styled.li`
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 4px;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
