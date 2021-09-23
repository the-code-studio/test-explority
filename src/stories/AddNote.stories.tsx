import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CreateNote from '../features/notes/createNote'

export default {
	title: 'Example/CreateNote',
	component: CreateNote,
} as ComponentMeta<typeof CreateNote>

const Template: ComponentStory<typeof CreateNote> = (args) => (
	<CreateNote {...args} />
)

export const AddNot = Template.bind({})
