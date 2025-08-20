import { MdAddShoppingCart } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;

	@media (min-width: 768px) {
		width: 1080px;
	}
`;

export const CardContainer = styled.div`
 display: grid;
 grid-template-columns: 1fr;
 gap: 1rem;
 padding: 1rem;
 
 @media (min-width: 768px) {
	 grid-template-columns: repeat(3, 1fr);
	}
`;

export const CardInfo = styled.div`
	background-color: var(--white);
	border-radius: 4px;
	gap: 0.5rem;
	min-height: 20.25rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 1rem;
`;

export const Title = styled.p`
	color: var(--gray-200);
	line-height: 1.375rem;
	font-weight: 700;
`;

export const Price = styled.p`
	color: var(--black);
	line-height: 1.375rem;
	font-weight: 700;
`;

export const Picture = styled.picture`
	width: 9.1875rem;
	height: 11.75rem;
	display: block;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Button = styled.button<{ $isInCart?: boolean }>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
  background-color: ${props => props.$isInCart ? 'var(--green)' : 'var(--blue)'};
  color: var(--white);
	font-size: 0.75rem;
	font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.6875rem 0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.$isInCart ? 'var(--green)' : 'var(--blue)'};
    opacity: 0.9;
  }
`;

export const IconCart = styled(MdAddShoppingCart)`
	width: 1.5rem;
	height: 1.5rem;
	color: var(--white);
`;

export const CountIten = styled.span`
	font-size: 0.75rem;
	font-weight: 700;
	color: var(--white);
`;

export const TextButton = styled.span`
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	color: var(--white);
`;