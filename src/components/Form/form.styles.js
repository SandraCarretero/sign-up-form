import styled from 'styled-components';

const StyledFlex = styled.div`
	display: flex;
	flex-direction: column;
	width: 95%;
	align-items: center;

	@media (min-width: 1024px) {
		width: 33.75rem;
	}
`;

const StyledForm = styled.form`
	width: 95%;
	background: white;
	border-radius: 10px;
	min-height: 442px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem;
	gap: 1rem;
	box-shadow: 0rem 0.1875rem 0rem 0rem #0000004d;
`;

const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

const StyledContainerInput = styled.div`
	width: 100%;
	height: 3.5rem;
	border: 1px solid #dedede;
	border-radius: 5px;
	display: flex;
	padding-inline: 1.1875rem;
	color: white;
	align-items: center;
	justify-content: space-between;
`;

const StyledInput = styled.input`
	border: none;
	width: 100%;
	height: 100%;
	&:focus {
		border: none;
		outline: none;
	}

	&:active {
		border: none;
		outline: none;
	}
`;

const StyledTextError = styled.span`
	color: #ff7979;
	font-size: 0.6875rem;
	font-style: italic;
	text-align: right;
`;

const StyledButton = styled.input`
	width: 100%;
	height: 3.5rem;
	border: none;
	border-radius: 0.3125rem;
	display: flex;
	padding-left: 1.1875rem;
	background-color: #38cc8b;
	color: white;
	font-weight: 500;
	font-size: 0.9375rem;
	letter-spacing: 0.0625rem;
	box-shadow: 0rem 0.1875rem 0rem 0rem #33b97e;
	cursor: pointer;
`;

const StyledText = styled.p`
	width: 15.5625rem;
	color: #bab7d4;
	font-size: 0.6875rem;
	text-align: center;
`;

const StyledTerms = styled.span`
	color: #ff7979;
	font-weight: 700;
`;

export {
	StyledFlex,
	StyledForm,
	StyledContainer,
	StyledContainerInput,
	StyledInput,
	StyledTextError,
	StyledButton,
	StyledText,
	StyledTerms
};
