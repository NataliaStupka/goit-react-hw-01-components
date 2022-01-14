import styled from '@emotion/styled';


// выбор цвета по статусу активен/неактивен
export const Status = styled.span`
color: ${props => props.userStatus ? 'green' : 'red'};
margin-right: 20px;
`

export const Avatar = styled.img`
    margin-right: 15px;
`
export const Name = styled.p`
font-family: "Work Sans", sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.17;
    color: rgb(39, 41, 41);
`
