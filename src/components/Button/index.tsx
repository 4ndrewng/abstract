import React from "react";
import styled from "styled-components";

type ButtonType = {
  href: string;
  label: string;
  type?: "reverse";
};

const Button = ({ href, label, type }: ButtonType) => {
  return (
    <StyledButton href={href} target="_blank" type={type}>
      {label}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.a`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  min-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  font-size: 24px;
  line-height: 1;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: inset 0 0 0 1px transparent, inset 0 0 0 10rem transparent;
  transition: box-shadow 100ms ease, color 100ms ease;
  ${(props: ButtonType) =>
    props.type === "reverse"
      ? "border: 1px solid #fff;"
      : "background-color: #4c5fd5;"}

  &:hover {
    ${(props: ButtonType) =>
      props.type === "reverse"
        ? "box-shadow: inset 0 0 0 1px #fff, inset 0 0 0 10rem #fff;color: #000;"
        : "box-shadow: inset 0 0 0 0 #000, inset 0 0 0 10rem rgb(0 0 0 / 20%);"}
  }

  &:active {
    top: 1px;
  }
`;
