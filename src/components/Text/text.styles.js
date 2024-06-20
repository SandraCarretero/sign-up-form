import styled from 'styled-components';

const StyledTextContainer = styled.div`
	text-align: center;
	width: 95%;

	@media (min-width: 1024px) {
		width: 32.8125rem;
	}
`;

const StyledTitle = styled.h1`
	font-size: 1.75rem;
	line-height: 36px;
	letter-spacing: -0.29px;

	@media (min-width: 1024px) {
		font-size: 3.125rem;
		text-align: left;
		line-height: 3.4375rem;
		letter-spacing: -0.0325rem;
	}
`;

const StyledText = styled.p`
	font-size: 1rem;
	line-height: 1.625rem;

	@media (min-width: 1024px) {
		text-align: left;
	}
`;

export { StyledTextContainer, StyledTitle, StyledText };
