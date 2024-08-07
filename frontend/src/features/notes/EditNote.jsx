import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNoteById } from './notesApiSlice'
import { selectAllUsers } from '../users/usersApiSlice'
import EditNoteForm from './EditNoteForm'

export default function EditNote() {
	const { id } = useParams()

	const note = useSelector((state) => selectNoteById(state, id))
	const users = useSelector(selectAllUsers)

	const content =
		note && users ? (
			<EditNoteForm users={users} note={note} />
		) : (
			<p>Loading...</p>
		)

	return content
}
