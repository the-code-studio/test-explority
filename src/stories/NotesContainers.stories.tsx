import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ShowNotes from '../features/notes/showNotes'

export default {
	title: 'Example/ShowNotes',
	component: ShowNotes,
} as ComponentMeta<typeof ShowNotes>

const Template: ComponentStory<typeof ShowNotes> = (args) => (
	<ShowNotes {...args} />
)

export const notesContainer = Template.bind({})
