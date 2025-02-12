import styled from "styled-components";
import BackgroudLogin from "../../assets/background-login.svg"
import Backgroud from "../../assets/background.svg"


export const Container = styled.div`
   display: flex;
   height: 100vh;
   width: 100vw;
`;

export const LeftContainer = styled.div`
   background-image: url('${BackgroudLogin}');
   background-size: cover;
   background-position: center;
   height: 100%;
   width: 100%;
   max-width: 50%;
   display: flex;
   align-items: center;
   justify-content: center;

   img {
    width: 40%;
   }
`;

export const RigthContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height: 100%;
   width: 100%;
   max-width: 50%;
   background-image: url('${Backgroud}');
   background-color: #1e1e1e;
   
   p {
      color: #fff;
      font-size: 18px;
      font-weight: 800;

    a{
      text-decoration: underline;
    }
   }
`;

export const Title = styled.h2`
  font-family: "Road Rage", serif;
  font-size: 45px;
  color: #fff;

  span {
    color: #9758A6;
    font-family: "Road Rage", serif;
    ;
  }

`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 20px;
   width: 100%;
   max-width: 400px;
`;

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   width: 100%;

   input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
   }

   label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
   }

   p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
   }
`;

