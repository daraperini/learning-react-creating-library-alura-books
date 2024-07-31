import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbInputQuantidade } from "../src";

export default {
    title: 'Componentes/AbInputQuantidade',
    component: AbInputQuantidade,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbInputQuantidade>

const Template: ComponentStory<typeof AbInputQuantidade> = () => <AbInputQuantidade/>

export const AbInputQuantidadeComponent = Template.bind({})
