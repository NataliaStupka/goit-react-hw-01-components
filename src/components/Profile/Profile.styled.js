import styled from '@emotion/styled';

export const UserProfile = styled.div`
  width: 280px;
  margin: 10px auto;
  border: solid 1px gray;
`;

export const Avatar = styled.img`
  height: 140px;
  border-radius: 50px;
  background-color: floralwhite;

  display: block;
  margin: 0px auto;
`;

export const Description = styled.div`
  background-color: antiquewhite;
  border-bottom: solid 1px gray;
  padding-top: 20px;
`;

export const Name = styled.p`
  text-align: center;
`;
export const Tag = styled.p`
  text-align: center;
`;
export const Location = styled.p`
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;
