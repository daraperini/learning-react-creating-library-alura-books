import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AbCampoTexto, AbCampoTextoProps } from "../src";

export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label: {
            control: 'text'
        }
      },
      parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args}/>

export const AbCampoTextoComponent = Template.bind({})

AbCampoTextoComponent.args = {
    label: 'Uma label interessante',
} as AbCampoTextoProps
