import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 2.5em;
  text-align: center;
  margin-top:0;
`;
export const TitleInput = styled.input`
 flex:0 0 50%;
 width:200px;
  padding:4px;
font-size:24px;
border: 1px solid #999;
border-radius:3px;
background-color:#D6DAD9;
margin-bottom:15px;
`;
export const BodyInput = styled.textarea`
overflow:hidden;
margin:5px 20px 5px 0;
border: 1px solid #999;
border-radius:3px;
font-size:18px;
 width:500px;
 padding:0;
height:150px;
padding:5px;
background-color:#D6DAD9;

`;
export const Button = styled.button`
margin-top:15px;
 border:1px solid black;
 border-radius:3px;
 padding:3px;
 font-size:22px;
 width:150px;
 &:hover{
   background-color:grey;
 }
`;
export const Form = styled.form`
margin-left:20px;
min-height:300px;
 display:flex;
 flex-direction:column;
  
`;