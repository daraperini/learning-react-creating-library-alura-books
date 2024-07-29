import React from "react";
import styled from "styled-components";

export interface AbTagProps {
    texto: string
}

const TagEstilizada = styled.div `
    background: #EB9B00;
    padding: 48px;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    display: inline-block;
    font-family: sans-serif;
`

export const AbTag = ({texto}: AbTagProps) => {
    return (
        <TagEstilizada>
            {texto}
        </TagEstilizada>
    )
}