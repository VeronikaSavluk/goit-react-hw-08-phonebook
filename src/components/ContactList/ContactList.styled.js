import styled from 'styled-components';

export const List = styled.ul`
padding: 0;
margin: 0;
list-style: none;
`;

export const ContactItem = styled.li`
display: grid;
grid-template-columns: 115px 140px 65px;
align-items: center;
margin-bottom: 5px;
padding: 0;
font-size: 14px;
`;

export const ContactName = styled.p`
margin: 0;
padding: 0;
`;
export const ContactNumber = styled.p`
margin: 0;
padding: 0 4px;
text-align: end;
`;

export const Delete = styled.button`
padding: 2px;
margin: 0;
width: 60px;
font-size: 9px;
border-radius: 15px;
border-color: #1E90FF;
background-color: #1E90FF;
color: #FFF8DC;
`