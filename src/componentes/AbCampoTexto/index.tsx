import React from 'react';
import styled from 'styled-components';

export interface AbCampoTextoProps {
  label: string;
  value: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelEstilizada = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  color: #002f52;
  font-weight: 700;
  font-size: 16px;
  padding-left: 20px;
`;

const InputEstilizado = styled.input`
  font-size: 16px;
  line-height: 24px;
  padding: 12px 20px;
  border: 1px solid #002f52;
  color: #002f52;
  border-radius: 45px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export const AbCampoTexto = ({ label, value, placeholder, type, onChange }: AbCampoTextoProps) => {
  return (
    <DivEstilizada>
      <LabelEstilizada>{label}</LabelEstilizada>
      <InputEstilizado
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={ e => onChange(e.target.value)}
      ></InputEstilizado>
    </DivEstilizada>
  );
};
