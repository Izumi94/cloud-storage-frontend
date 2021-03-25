import React from 'react'
import Input from '../input'
import AuthButton from '../authBtn'
import { RegisterTitle, RegisterForm, RegisterBody } from './styles'
import { registration} from '../../actions/userAction'

const Registration = () => {
	const [registerBody, setRegisterBody] = React.useState({
		name: '',
		email: '',
		password: ''
	})

	window.req = registerBody

	return (
		<RegisterBody>
			<RegisterForm>
				<RegisterTitle>Регистрация</RegisterTitle>
				<Input setValue={setRegisterBody} value={registerBody.name} text="Введите имя..." name="name" />
				<Input setValue={setRegisterBody} value={registerBody.email} text="Введите адрес электронной почты..." name="email" />
				<Input setValue={setRegisterBody} value={registerBody.password} text="Введите пароль..." type='password' name="password" />
				<AuthButton text="Войти" />
				<AuthButton>
					onClick={registration} text='Sign Up'
				</AuthButton>

			</RegisterForm>
		</RegisterBody>


	)
}

export default Registration