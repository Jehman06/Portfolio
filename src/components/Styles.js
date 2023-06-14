import styled from 'styled-components';

export const Heading = styled.h1`
   text-align: center;
   color: green;
`;

export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;

export const Button = styled.div`
   position: fixed; 
   width: 10px;
   right: 29px;
   top: 50%;
   transform: translateY(-50%);
   height: 10px;
   font-size: 2rem;
   z-index: 1;
   cursor: pointer;
   color: #4CAF50;
`;