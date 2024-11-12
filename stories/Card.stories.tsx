import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Card from '../src/components/Card'

export default {
    title: 'components/Card',
    component: Card

} as ComponentMeta<typeof Card>

const template: ComponentStory< typeof Card> = () =>{
    return(
        <Card>
            <h1>Olá, eu sou um card</h1>
        </Card>
    )
}

export const card = template.bind({}) 