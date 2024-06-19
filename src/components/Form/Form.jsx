import { useState } from 'react';
import { StyledForm } from './form.styles';

const Form = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		password: '',
        email: '',
		errors: {
			firstName: false,
			lastName: false,
			password: false,
            email: false
		}
	});

	return (
		<StyledForm>
			<div>
				<input
					type='text'
					name='firstName'
					id='fistName'
					placeholder='First Name'
					onInput={event =>
						changeFormValues(event.target, formData, setFormData)
					}
				/>
				{!formData.errors.firstName && <span>Invalid Name</span>}
			</div>
			<div>
				<input
					type='text'
					name='lastName'
					id='lastName'
					placeholder='Last Name'
					onInput={event =>
						changeFormValues(event.target, formData, setFormData)
					}
				/>
				{!formData.errors.lastName && <span>Invalid Last Name</span>}
			</div>
            <div>
				<input
					type='text'
					name='email'
					id='email'
					placeholder='Email Adress'
					onInput={event =>
						changeFormValues(event.target, formData, setFormData)
					}
				/>
				{!formData.errors.email && <span>Invalid Email</span>}
			</div>
			<div>
				<input
					type='text'
					name='password'
					id='password'
					placeholder='Password'
					onInput={event =>
						changeFormValues(event.target, formData, setFormData)
					}
				/>
				{!formData.errors.password && <span>Invalid Password</span>}
			</div>
			<input type='submit' value='Send' />
		</StyledForm>
	);
};
const validateForm = (name, value, formData, setFormData) => {
	const formatedValue = value.trim();
	const regexName = /^[a-zñ]+$/i;
	if (name === 'name') {
		const isValidName = regexName.test(formatedValue);
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, name: isValidName }
		});
	} else if (name === 'age') {
		const isValidAge = value > 16 && value < 110;
		setFormData({
			...formData,
			[name]: value,
			errors: { ...formData.errors, age: isValidAge }
		});
	}
};

const changeFormValues = (input, formData, setFormData) => {
	const { name, value } = input;
	validateForm(name, value, formData, setFormData);
};

export default Form;
