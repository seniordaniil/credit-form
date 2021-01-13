import React from 'react';
import styled from 'styled-components';
import Flag from './flag';

const CheckBoxInput = styled.input`
  display: none;
`;

const CheckBoxLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: ${({ color }) => color};
  margin-left: 16px;
  flex: 1;
`;

export const Checkbox = ({
  checked,
  onChange,
  name,
  children,
  color,
  bg,
  fontColor,
}) => {
  return (
    <Label>
      <CheckBoxLabel color={color} bg={bg}>
        <CheckBoxInput
          type={'checkbox'}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        {checked && <Flag />}
      </CheckBoxLabel>
      {children && <Text color={fontColor}>{children}</Text>}
    </Label>
  );
};
