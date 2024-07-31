import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FlexContainerEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: Arial, Helvetica, sans-serif;
  color: #002F52;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

const ContainerEstilizada = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const BotaoEstilizado = styled.button<{ disabled?: boolean }>`
    background: ${(props) => (props.disabled ? '#779bb8' : '#002F52')};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 50%;
    color: #fff;
    width: 28px;
    height: 28px;
    font-size: 24px;
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};;
`

const LabelEstilizada = styled.label`
    font-weight: 700;
    padding-left: 4px;
`

export interface AbInputQuantidadeProps {
    onChange?: (value: number) => void
}

export const AbInputQuantidade = ({onChange}: AbInputQuantidadeProps) => {

    const [valor, setValor] = useState(1);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (onChange) {
            onChange(Number(valor))
        }

        if (valor === 1) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }

    }, [valor])

  return (
    <FlexContainerEstilizado>
      <LabelEstilizada>Quantidade</LabelEstilizada>
      <ContainerEstilizada>
        <BotaoEstilizado onClick={() => setValor(anterior => anterior - 1)} disabled={isDisabled}>-</BotaoEstilizado>
        <span>{valor}</span>
        <BotaoEstilizado onClick={() => setValor(anterior => anterior + 1)}>+</BotaoEstilizado>
      </ContainerEstilizada>
    </FlexContainerEstilizado>
  );
};
