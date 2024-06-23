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
		},
		dirty: {
			name: false,
			lastName: false,
			password: false,
			email: false
		}
	});

	return (
		<StyledFlex>
			<Box />
			<StyledForm
				onSubmit={event => handleSubmit(event, formData, setFormData)}
			>
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
						{formData.dirty.name && !formData.errors.name && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{formData.dirty.name && !formData.errors.name && (
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
						{formData.dirty.lastName && !formData.errors.lastName && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{formData.dirty.lastName && !formData.errors.lastName && (
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
						{formData.dirty.email && !formData.errors.email && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{formData.dirty.email && !formData.errors.email && (
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
						{formData.dirty.password && !formData.errors.password && (
							<img src='/images/icon-error.svg' alt='' />
						)}
					</StyledContainerInput>
					{formData.dirty.password && !formData.errors.password && (
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
	let isValid = false;

	if (name === 'name') {
		isValid = regexName.test(formatedValue) && formatedValue !== '';
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, name: isValid },
			dirty: { ...formData.dirty, name: true }
		});
	} else if (name === 'lastName') {
		isValid = regexName.test(formatedValue) && formatedValue !== '';
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, lastName: isValid },
			dirty: { ...formData.dirty, lastName: true }
		});
	} else if (name === 'email') {
		isValid = regexEmail.test(formatedValue) && formatedValue !== '';
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, email: isValid },
			dirty: { ...formData.dirty, email: true }
		});
	} else if (name === 'password') {
		isValid = regexPassword.test(formatedValue) && formatedValue !== '';
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, password: isValid },
			dirty: { ...formData.dirty, password: true }
		});
	}
};

const changeFormValues = (input, formData, setFormData) => {
	const { name, value } = input;
	validateForm(name, value, formData, setFormData);
};

const handleSubmit = (event, formData, setFormData) => {
	event.preventDefault();

	const fields = ['name', 'lastName', 'email', 'password'];
	let newFormData = { ...formData };

	fields.forEach(field => {
		if (!formData[field]) {
			newFormData = {
				...newFormData,
				errors: { ...newFormData.errors, [field]: false },
				dirty: { ...newFormData.dirty, [field]: true }
			};
		}
	});

	setFormData(newFormData);

	const allValid = Object.values(newFormData.errors).every(error => error);
	if (allValid) {
		console.log('Formulario enviado:', newFormData);
	} else {
		console.log('Formulario con errores:', newFormData);
	}
};

export default Form;
