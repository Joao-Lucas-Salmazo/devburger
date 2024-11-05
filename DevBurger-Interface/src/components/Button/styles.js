import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 5px;
  background-color: #9758a6;
  font-family: "Road Rage", serif;
  font-size: 30px;
  color: #fff;


  &:hover {
    background-color: #6f357c;
    border: 1px dashed #fff;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='white' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 13px;
}

`
