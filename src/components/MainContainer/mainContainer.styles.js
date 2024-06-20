import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 4rem;

	@media (min-width: 1024px) {
		flex-direction: row;
		height: 100vh;
	}
`;

export { StyledContainer };
