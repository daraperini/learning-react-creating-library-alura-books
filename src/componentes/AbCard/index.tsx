import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbCardProps {
    children: ReactNode
}

const CardEstilizado = styled.div `
    padding: 48px;
    background: #FFF;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    border-radius: 10px;
`

export const AbCard = ({children}: AbCardProps) => {
    return (
        <CardEstilizado>
            {children}
        </CardEstilizado>
    )
}