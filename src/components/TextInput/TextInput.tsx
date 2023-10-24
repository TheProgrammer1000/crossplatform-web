import { useState, useEffect } from "react"

export const TextInput = (props) => {
	const [darkMode, setDarkMode] = useState(false)
	
	const {
		placeholder,
		value,
		onInput,
		onButtonClick,
		styling,
		setLastName
	}	= props


	// Destructuring av array med "..."
	// const arr1 = ['äpple', 'kiwi']
	// const arr2 = ['apelsin', 'melon']
	// const arr3 = [...arr1, ...arr2, 'Banan']
	
	// console.log(arr1)
	// console.log(arr2)
	// console.log(arr3)

	return (
		<>
			<input
				style={{ ...styling, backgroundColor: darkMode ? 'black' : 'white' }}
				type="text"
				value={value}
				placeholder={placeholder}
				// onInput={(event) => {console.log(event)}}
				onInput={onInput}
			/>
			{onButtonClick && (
				<button onClick={onButtonClick}>Rensa</button>
			)}
			{setLastName && (
				<button onClick={() => setLastName('Anka')}>Ändra lastname</button>
			)}

			<button onClick={() => setDarkMode(!darkMode)}>Ändra tema</button>
		</>
	)
}
