import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import AbBotao from '../src/components/AbBotao'

export default {
    title: 'components/AbBotao',
    component: AbBotao

} as ComponentMeta<typeof AbBotao>

const template: ComponentStory< typeof AbBotao> = () =><AbBotao />

export const primerio = template.bind({}) 