import { StyledText, StyledTextContainer, StyledTitle } from './text.styles';

const Text = () => {
	return (
		<StyledTextContainer>
			<StyledTitle>Learn to code by watching others</StyledTitle>
			<StyledText>
				See how experienced developers solve problems in real-time. Watching
				scripted tutorials is great, but understanding how developers think is
				invaluable.
			</StyledText>
		</StyledTextContainer>
	);
};

export default Text;
