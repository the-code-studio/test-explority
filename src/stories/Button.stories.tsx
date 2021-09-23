import React from 'react'
import Button from '@mui/material/Button'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
	title: 'Example/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const AddButton = Template.bind({})
AddButton.args = {
	children: 'Add Note',
	variant: 'outlined',
}
