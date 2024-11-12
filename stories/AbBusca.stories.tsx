import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import AbBusca from '../src/components/AbBusca'

export default {
    title: 'components/AbBusca',
    component: AbBusca

} as ComponentMeta<typeof AbBusca>

const template: ComponentStory< typeof AbBusca> = () =><AbBusca />

export const primerio = template.bind({}) 