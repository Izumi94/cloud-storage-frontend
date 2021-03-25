import React from 'react'
import { RegisterBody } from '../registration/styles'
import {AuthBtn} from './styles'

const AuthButton = ({text}) => {
	const sendData = () => {
		const {name, email, password} = RegisterBody
	};
	return (
		<AuthBtn type="submit" onClick={sendData}>
			{text}
		</AuthBtn>
	)
}

export default AuthButton
