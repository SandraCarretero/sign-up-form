import { useState } from 'react';
import {
	StyledButton,
	StyledContainer,
	StyledContainerInput,
	StyledFlex,
	StyledForm,
	StyledInput,
	StyledTerms,
	StyledText,
	StyledTextError
} from './form.styles';
import Box from '../Box/Box';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
		password: '',
		email: '',
		errors: {
			name: false,
			lastName: false,
			password: false,
			email: false
		}
	});

	return (
		<StyledFlex>
			<Box />
			<StyledForm onSubmit={handleSubmit}>
				<StyledContainer>
					<StyledContainerInput>
						<StyledInput
							type='text'
							name='name'
							id='name'
							placeholder='First Name'
							onInput={event =>
								changeFormValues(event.target, formData, setFormData)
							}
						/>
						{!formData.errors.name && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{!formData.errors.name && (
						<StyledTextError>First Name invalid</StyledTextError>
					)}
				</StyledContainer>
				<StyledContainer>
					<StyledContainerInput>
						<StyledInput
							type='text'
							name='lastName'
							id='lastName'
							placeholder='Last Name'
							onInput={event =>
								changeFormValues(event.target, formData, setFormData)
							}
						/>
						{!formData.errors.lastName && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{!formData.errors.lastName && (
						<StyledTextError>Last Name invalid</StyledTextError>
					)}
				</StyledContainer>
				<StyledContainer>
					<StyledContainerInput>
						<StyledInput
							type='text'
							name='email'
							id='email'
							placeholder='Email Adress'
							onInput={event =>
								changeFormValues(event.target, formData, setFormData)
							}
						/>
						{!formData.errors.email && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{!formData.errors.email && (
						<StyledTextError>Looks like this is not an email</StyledTextError>
					)}
				</StyledContainer>
				<StyledContainer>
					<StyledContainerInput>
						<StyledInput
							type='password'
							name='password'
							id='password'
							placeholder='Password'
							onInput={event =>
								changeFormValues(event.target, formData, setFormData)
							}
						/>
						{!formData.errors.password && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{!formData.errors.password && (
						<StyledTextError>
							Minimum 8 characters, 1 uppercase letter, 1 lowercase letter and 1
							number
						</StyledTextError>
					)}
				</StyledContainer>
				<StyledButton type='submit' value='CLAIM YOUR FREE TRIAL' />

				<StyledText>
					By clicking the button, you are agreeing to our{' '}
					<StyledTerms>Terms and Services</StyledTerms>
				</StyledText>
			</StyledForm>
		</StyledFlex>
	);
};
const validateForm = (name, value, formData, setFormData) => {
	const formatedValue = value.trim();
	const regexName = /^[a-zñ]+$/i;
	const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/i;
	if (name === 'name') {
		const isValidName = regexName.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, name: isValidName }
		});
	} else if (name === 'lastName') {
		const isValidLastName = regexName.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, lastName: isValidLastName }
		});
	} else if (name === 'email') {
		const isValidEmail = regexEmail.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, email: isValidEmail }
		});
	} else if (name === 'password') {
		const isValidEmail = regexPassword.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, password: isValidEmail }
		});
	}
};

const changeFormValues = (input, formData, setFormData) => {
	const { name, value } = input;
	validateForm(name, value, formData, setFormData);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default Form;
