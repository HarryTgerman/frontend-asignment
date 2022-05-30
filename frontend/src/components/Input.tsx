import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const StyledInput = styled.textarea`
    padding: 12px;
    background: #2d2d2d;
    width: 916px;
    height: 256px;
    color:#ff881b;
    align-self: center;
`

export const Input = ({onChange, value}: {onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined, value:  string | number | readonly string[]}) => {
  return (
    <StyledInput
    value={value}
    placeholder="select * from blocks;"
    onChange={(e) => onChange(e)}
  />
  );
};

export default Input;
