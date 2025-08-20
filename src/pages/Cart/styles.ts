import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: calc(100vh - 8rem);
	background-color: var(--black);
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	`;

export const Card = styled.div`
	width: 100%;
	max-width: 1080px;
	margin: 0 auto;
	background-color: var(--white);
	padding: 2rem 1rem;
	position: relative;
	flex: 1;
	overflow-y: auto;
	border-radius: 4px;
	
	@media (min-width: 768px) {
		padding: 2rem;
	}

	.mobile-version {
		display: block;
		
		@media (min-width: 768px) {
			display: none;
		}
	}

	.desktop-version {
		display: none;
		
		@media (min-width: 768px) {
			display: block;
		}
	}
`;

export const CartItem = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
	padding: 0.75rem 0;
	position: relative;
`;

export const ItemPicture = styled.picture`
	width: 80px;
	height: 100px;
	display: block;
	border-radius: 4px;
	overflow: hidden;
`;

export const ItemImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ItemInfo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	.item-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.item-details {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}
`;

export const ItemTitle = styled.h3`
	font-size: 0.875rem;
	font-weight: 700;
	color: var(--black);
	margin: 0;
	flex: 1;
`;

export const ItemPrice = styled.p`
	font-size: 1rem;
	font-weight: 700;
	color: var(--black);
	margin: 0;
	white-space: nowrap;
`;

export const QuantityControl = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const QuantityButton = styled.button`
	width: 30px;
	height: 30px;
	border: none;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.2s ease;
	font-size: 1.2rem;
	font-weight: bold;
`;

export const QuantityInput = styled.input`
	width: 50px;
	height: 30px;
	background-color: var(--white);
	color: var(--black);
	font-size: 0.875rem;
	font-weight: 700;
	border: 1px solid var(--gray-50);
	border-radius: 4px;
	text-align: center;
	padding: 0.25rem;
`;

export const QuantitySubtotalRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	margin: 0.5rem 0;
`;

export const Subtotal = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
`;

export const SubtotalLabel = styled.span`
	font-size: 0.75rem;
	font-weight: 400;
	color: var(--gray-100);
`;

export const SubtotalValue = styled.span`
	font-size: 0.875rem;
	font-weight: 700;
	color: var(--black);
`;

export const IconTrash = styled(MdDelete)`	
	width: 1.5rem;
	height: 1.5rem;
	color: var(--blue);
	cursor: pointer;
	transition: opacity 0.2s ease;
	flex-shrink: 0;

	&:hover {
		opacity: 0.7;
	}

	.desktop-version & {
		position: static;
		top: auto;
		right: auto;
	}
`;

export const IconAdd = styled(MdAddCircleOutline)`
	width: 30px;
	height: 30px;
	color: var(--blue);
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover:not(:disabled) {
		opacity: 0.8;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		color: var(--gray-100);
	}
`;

export const IconRemove = styled(MdRemoveCircleOutline)`
	width: 30px;
	height: 30px;
	color: var(--blue);
	cursor: pointer;
	transition: opacity 0.2s ease;

	&:hover:not(:disabled) {
		opacity: 0.8;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		color: var(--gray-100);
	}
`;

export const DesktopTable = styled.div`
	width: 100%;
	border-collapse: collapse;
`;

export const DesktopHeader = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 0.5fr;
	gap: 1rem;
	padding: 0rem 0;
`;

export const DesktopRow = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr 1fr 0.5fr;
	gap: 1rem;
	padding: 0.75rem 0;
	align-items: center;
`;

export const DesktopCell = styled.div`
	font-size: 0.875rem;
	color: var(--gray-100);
	font-weight: 700;
	display: flex;
	align-items: center;

	&:last-child {
		justify-content: center;
	}
`;

export const CartFooter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-top: 1.5rem;
	border-top: 1px solid var(--gray-100);
	margin-top: auto;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

export const FinishButton = styled.button`
	background-color: var(--blue);
	color: var(--white);
	border: none;
	border-radius: 4px;
	padding: 0.5rem 2rem;
	font-size: 0.875rem;
	font-weight: 700;
	text-transform: uppercase;
	cursor: pointer;
	transition: opacity 0.2s ease;

	@media (min-width: 768px) {
		order: 1;
	}
`;

export const TotalSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;

	@media (min-width: 768px) {
		order: 2;
	}
`;

export const TotalLabel = styled.span`
	font-size: 0.875rem;
	font-weight: 700;
	color: var(--gray-100);
`;

export const TotalValue = styled.span`
	font-size: 1.25rem;
	font-weight: 700;
	color: var(--black);
`;
