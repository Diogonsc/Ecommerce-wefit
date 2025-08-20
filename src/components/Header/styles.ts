import { MdShoppingBasket } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
	width: 100%;
	margin: 0 auto;

	@media (min-width: 768px) {
		width: 1080px;
	}
`;

export const Logo = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}
	p{
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--white);

		@media (max-width: 768px) {
			display: none;
		}
	}
	span {
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--gray);
	}
`;

export const Icon = styled(MdShoppingBasket)`
	width: 1.5rem;
	height: 1.5rem;
	color: var(--white);
	cursor: pointer;
	transition: opacity 0.2s ease;
`;