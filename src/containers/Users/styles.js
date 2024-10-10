import styled from "styled-components";
import backgoud from "../../assets/bg image.svg"


export const Container = styled.div`
  background: url("${backgoud}");
  background-size: cover;
  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 40px; 

  height:100%;
  min-height:100vh;

`;
export const Image = styled.img`
  margin:80px 50px ;
`;
export const ContainerItens = styled.div`
  background: linear-gradient(157.44deg,
  rgba(255, 255, 255, 0.6) 0.84%,
  rgba(255, 255, 255, 0.6) 0.85%,
  rgba(255, 255, 255, 0.15) 100%
);
  backdrop-filter:blur(45px);
  border-radius:61px 61px 0px 0px;

  padding:50px 36px;
  display:flex;
  flex-direction:column;

  height:100vh;
  min-height: calc(100vh -180px);
`;

export const H1 = styled.h1` 
  font-style:normal;
  font-weight:bold;
  font-size:34px;
  line-height:40px;
  text-align: center;
  color:#ffffff;
  margin-bottom: 80px;
`

export const Button = styled.button`
  margin-top:100px;
  width:342px;
  height:74px;

  background: transparent;
  border-radius:14px;
  border:1px solid #ffffff;
  backdrop-filter:blur(10px);

  font-style:normal;
  font-weight:bold;
  font-size:19px;
  line-height:28px;

  color:#ffffff;

  cursor:pointer;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  

  &:hover{
    opacity:0.8;
  }
  &:active{
    opacity:0.5;
  }
`;
export const User = styled.li`
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-top:20px;
  gap:15px;

  background:rgba(225,255,255,0.25);
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  border-radius: 14px;

  width:342px;
  height:58px;

  border:none;
  outline:none;

p {
  font-style:normal;
  font-weight:bold;
  font-size:20px;
  line-height:28px;
  color:#ffffffff;

}
button{

  background:none ;
  border:none ;
  cursor:pointer;

}
`
