import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 30px;
`;

export const UserProfile = styled.div`
  width: 280px;
  margin: 10px auto;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Avatar = styled.img`
  height: 140px;
  border-radius: 90px;
  padding: 10px;
  background-color: rgb(240, 242, 242);

  display: block;
  margin: 0px auto;
`;

export const Description = styled.div`
  background-color: #fff;
  border-bottom: solid 1px rgb(225, 226, 226);
  padding-top: 20px;
  padding-bottom: 15px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
export const Tag = styled.p`
  text-align: center;
  color: gray;
`;
export const Location = styled.p`
  text-align: center;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgb(245, 240, 240);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  color: gray;
`;

export const Quantity = styled.span`
  align-items: center;
  font-weight: 600;
  margin: 0 auto;
`;
