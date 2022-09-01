import React from "react";
import styled from "styled-components";

type ButtonType = {
  href: string;
  label: string;
};

const Button = ({ href, label }: ButtonType) => {
  return (
    <ButtonEle href={href} target="_blank">
      {label}
    </ButtonEle>
  );
};

export default Button;

const ButtonEle = styled.a`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  min-height: 4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  font-size: 24px;
  line-height: 1;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0 1px transparent, inset 0 0 0 10rem transparent;
  transition: box-shadow 100ms ease;
  background-color: #4c5fd5;

  &:hover {
    box-shadow: inset 0 0 0 0 #000, inset 0 0 0 10rem rgb(0 0 0 / 20%);
  }

  &:active {
    top: 1px;
  }
`;
