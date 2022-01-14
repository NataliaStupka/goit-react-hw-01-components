import styled from '@emotion/styled';

export const Section = styled.section`
  width: 400px;
  margin: 35px auto;
  background-color: #fff;
`;

export const Title = styled.h2`
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
`;

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
`;

// 2 вариант изменения цвета
let color = [
  '#a51e19',
  '#19a530',
  '#73872c',
  '#6619a5',
  '#3719a5',
  '#a5193c',
  '#a55119',
  '#195aa5',
];
const setBgColor = () => {
  return color[Math.floor(Math.random() * color.length)];
};

// // 1 вариант изменения цвета
// const setBgColor = () => {
//   // '#' + Math.floor(Math.random()*16777215).toString(16)
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

export const StatList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100% / 5);
  padding: 20px 0px;
  color: #fff;
  background-color: ${setBgColor};
`;

export const List = styled.span`
  /* display: flex;
  flex-direction: column;

  text-align: center; */
`;
