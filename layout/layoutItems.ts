import styled from 'styled-components'

export const Header = styled.header`
  font-size: 2em;
  text-align: center;
  background-color:#1F1C1C;
  margin-top:0;
  height:60px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  border-radius:3px;
`;
export const LinkItem = styled.a`
  padding-left:25px;
  font-weight:300;
  color: #ECF0F1;
  text-decoration:none;
   cursor:pointer;
   &:hover{
      color:#FAD7A0;
   }
`;
export const Message = styled.div`
   position:absolute;
   bottom:30px;
   right:50px;
   font-size:25px;
   transition: all 0.5s ease-out;
`;