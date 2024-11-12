import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Tag from '../src/components/Tag'

export default {
    title: 'components/Tag',
    component: Tag

} as ComponentMeta<typeof Tag>

const template: ComponentStory< typeof Tag> = (args) =><Tag {...args}/>

export const primario = template.bind({})

primario.args = {
    children: 'tag'
}