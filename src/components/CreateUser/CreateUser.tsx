import React, { useState } from "react"
import { TextInput } from "../TextInput"
import styles from './CreateUser.module.css'

export const CreateUser = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName]	= useState('')
	const [feedback, setFeedback] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const submitHandler = () => {
		console.log(firstName)
		console.log(lastName)
		if (firstName !== '' && lastName !== '') {
			setFeedback(`Hej ${firstName} ${lastName}, välkommen!`)
			setSubmitted(true)
			setFirstName('')
			setLastName('')
			setTimeout(() => {
				setFeedback('')
			}, 5000)	
		} else {
			setSubmitted(false)
			setFeedback('Du måste fylla i alla fält!')
		}
	}	

	const clearInput = () => {
		setFirstName('')
	}

	return (
		<div className={styles.container}>
			<p>{`Tack för din beställning av ${10} stycken ${'Banana'}`}</p>
			<TextInput
				value={firstName}	
				placeholder="Firstname"
				styling={{ marginBottom: '1rem' }}
				onButtonClick={() => clearInput()}	
				changeLastName={(value) => setLastName(value)}	
				onInput={(event) => {
					setFirstName(event.target.value)
				}}
			/>
			<TextInput
				value={lastName}
				styling={{ marginBottom: '5rem', backgroundColor: 'red' }}
				placeholder="Lastname"
				onInput={(event) => {
					setLastName(event.target.value)
				}}
			/>
			<button onClick={submitHandler}>Tjoho!!</button>	
			<p style={{ color: submitted ? 'green' : 'red' }}>{feedback}</p>
		</div>
	)
}
