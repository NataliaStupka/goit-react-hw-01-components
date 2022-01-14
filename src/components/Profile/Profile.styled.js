import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 280px;
  margin: 0px auto;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Description = styled.div`
  background-color: #fff;
  border-bottom: solid 1px rgb(225, 226, 226);
  padding: 40px 0px 20px;
`;

export const Avatar = styled.img`
  height: 140px;
  border-radius: 90px;
  padding: 10px;
  background-color: rgb(240, 242, 242);

  display: block;
  margin: 0px auto 15px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;
export const Text = styled.p`
  text-align: center;
  color: gray;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding-left: 0;
  background-color: rgb(245, 240, 240);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  width: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid rgba(47, 48, 58, 0.1);
  }
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  align-items: center;
  font-weight: 600;
  margin: 0 auto;
`;
