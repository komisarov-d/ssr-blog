import styled from 'styled-components'

export const PostTitle = styled.h2`
  font-size: 2.5em;
  margin-top:10px;
  text-align: center;  
`;

export const PostBody = styled.p`
 font-size:1.5em;
 margin:0 auto;
 max-width:70%;
`;
export const PostHead = styled.div`
 display:flex;
 justify-content:space-between;
 padding:5px;
 max-width:70%;
 margin:0 auto;
`;

export const CommentsInput = styled.input`
width:400px;
padding:4px;
margin-right:10px;
`;
export const CommentsForm = styled.form`
margin:0 auto;
margin-top:20px;
margin-bottom:20px;
display:flex;
width:70%;
`;
export const CommentsList = styled.ul`
margin:0 auto;
margin-top:20px;
display:flex;
flex-direction: column;
width:70%;
`;
export const NoComment = styled.p`
display:flex;
justify-content:center;
font-size:22px;
`;
export const Comment = styled.li`
 font-size:18px;
 list-style:none;
 margin-bottom:10px;
`;
export const PostButton = styled.button`
 color:white;
 background-color:#7B241C;
 height:40px;
 border-radius:3px;
 padding:3px;
 font-size:18px;
 margin:15px 30px 0 0
`;
export const CommentButton = styled.button`
 color:black;
 background-color:#A3E4D7;
 
 border-radius:3px;
 padding:3px 7px;
 font-size:16px;
`;