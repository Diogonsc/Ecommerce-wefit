import styled, { keyframes } from "styled-components";

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PictureLoader = styled.picture`
	width: 5.1875rem;
	height: 5.1875rem;
	display: block;
	margin: 0 auto;
`;

export const ImageLoader = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	animation: ${spin} 1s linear infinite;
`;