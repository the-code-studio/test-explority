import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Note from '../features/notes/noteCard'

export default {
	title: 'Example/Note',
	component: Note,
} as ComponentMeta<typeof Note>

const Template: ComponentStory<typeof Note> = (args) => (
	<div style={{ width: 500 }}>
		{' '}
		<Note {...args} />
	</div>
)

export const noteCard = Template.bind({})
noteCard.args = {
	id: 'storybook_Note',
	paragraphes: [
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>,
		<p>Sed luctus sed eros non pulvinar. Nam interdum bibendum augue</p>,
	],
}
