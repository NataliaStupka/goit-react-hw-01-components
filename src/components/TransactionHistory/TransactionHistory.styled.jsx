import styled from '@emotion/styled';

export const Table = styled.table`
    width: 60%;
    margin: 0px auto;
    text-align: center;
     box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
    background-color: white;

    & thead th {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.33;
        color: white;
        background-color: #43b3b3;
        padding: 15px;
        text-transform: uppercase;
    }

    & tbody td {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.29;
        padding: 10px;
    }

    /* Псевдокласс ":nth-child" потенциально небезопасен при выполнении рендеринга. Изменим его на ":nth-of-type". */
    & tbody tr:nth-of-type(2n) {
        background-color: rgb(240, 242, 242);
    }

    & thead th,
    & tbody td {
        width: calc(100% / 3);
  }
    `


