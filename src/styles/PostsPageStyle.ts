import styled from 'styled-components'

export const PageTitle = styled.h1`
  font-size: 3em;
  padding:20px 0 0px 40px;
`;
export const Line = styled.hr`
  width: 30%;
  height:1.5px;
  background-color:black;
margin-bottom:5px;
margin-left:10px;
`;
export const PostsTitle = styled.h1`
  font-size: 2em;
  padding:10px 0 10px 0;
`;
export const PostsBody = styled.h1`
  font-size: 1.5em;
  padding:20px 0 20px 40px;
`;
export const EmptyBlock = styled.p`
  font-size:30px;
  display:flex;
  align-items:center;
  justify-content:center;
`;
export const PostList = styled.ul`
  display:flex;
  flex-wrap:wrap;
    align-items: flex-start;
  `;
export const Post = styled.li`
padding:7px;
margin:5px;
border:1px solid black;
border-redius:3px;
 box-shadow: 0 0 4px rgba(0,0,0,0.5);
text-align:center;
display:block;
  width:30%;
  height:300px;
  overflow: hidden;
  cursor:pointer;
  &:hover{
    background-color:#ECF0F1;
  }
`;

export const PostLink = styled.a`
color:black
`;
