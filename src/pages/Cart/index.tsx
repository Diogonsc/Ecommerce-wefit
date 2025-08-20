import { 
	Card, 
	Container, 
	IconTrash, 
	IconAdd,
	IconRemove,
	CartItem,
	ItemImage,
	ItemInfo,
	ItemTitle,
	ItemPrice,
	QuantityControl,
	QuantityInput,
	QuantitySubtotalRow,
	Subtotal,
	SubtotalLabel,
	SubtotalValue,
	CartFooter,
	FinishButton,
	TotalSection,
	TotalLabel,
	TotalValue,
	DesktopTable,
	DesktopHeader,
	DesktopRow,
	DesktopCell,
	ItemPicture
} from "./styles"
import { useCart } from "../../hooks/useCart"
import { useNavigate } from "react-router-dom"
import { formatPrice } from "../../utils"
import { Empty } from "../../components/Empty"

export function Cart() {
	const { state, removeItem, updateQuantity, getTotalPrice } = useCart();
	const navigate = useNavigate();

	const handleQuantityChange = (id: number, newQuantity: number) => {
		if (newQuantity >= 0) {
			updateQuantity(id, newQuantity);
		}
	};

	const handleFinishOrder = () => {
		navigate('/checkout');
	};

	return (
		<Container>
			<Card>
						{state.items.length === 0 ? (
			<Empty 
				title="Parece que não há nada por aqui :("
				buttonText="Voltar para tela inicial" 
				onButtonClick={() => navigate('/')} 
			/>
		) : (
					<>
						<div className="mobile-version">
							{state.items.map((item) => (
								<CartItem key={item.id}>
									<ItemPicture>
										<source srcSet={item.image} media="(min-width: 768px)" />
										<source srcSet={item.image} media="(max-width: 767px)" />
										<ItemImage 
											src={item.image} 
											alt={item.title} 
											loading="lazy" 
											decoding="async"
										/>
									</ItemPicture>
									<ItemInfo>
										<div className="item-header">
											<div className="item-details">
												<ItemTitle>{item.title}</ItemTitle>
												<ItemPrice>R$ {formatPrice(item.price)}</ItemPrice>
											</div>
											<IconTrash onClick={() => removeItem(item.id)} />
										</div>
										
										<QuantitySubtotalRow>
											<QuantityControl>
												<IconRemove 
													onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
													style={{ cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer' }}
													onMouseEnter={(e) => {
														if (item.quantity <= 1) {
															e.currentTarget.style.opacity = '0.5';
														}
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.opacity = '1';
													}}
												/>
												<QuantityInput 
													type="number" 
													value={item.quantity}
													onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
													min="1"
												/>
												<IconAdd 
													onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
												/>
											</QuantityControl>
											
											<Subtotal>
												<SubtotalLabel>SUBTOTAL</SubtotalLabel>
												<SubtotalValue>R$ {formatPrice(item.price * item.quantity)}</SubtotalValue>
											</Subtotal>
										</QuantitySubtotalRow>
									</ItemInfo>
								</CartItem>
							))}
						</div>

						<div className="desktop-version">
							<DesktopTable>
								<DesktopHeader>
									<DesktopCell>PRODUTO</DesktopCell>
									<DesktopCell>QTD</DesktopCell>
									<DesktopCell>SUBTOTAL</DesktopCell>
									<DesktopCell></DesktopCell>
								</DesktopHeader>
								
								{state.items.map((item) => (
									<DesktopRow key={item.id}>
										<DesktopCell>
											<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
												<ItemPicture>
													<source srcSet={item.image} media="(min-width: 768px)" />
													<source srcSet={item.image} media="(max-width: 767px)" />
													<ItemImage 
														src={item.image} 
														alt={item.title} 
														loading="lazy" 
														decoding="async"
													/>
												</ItemPicture>
												<div>
													<ItemTitle>{item.title}</ItemTitle>
													<ItemPrice>R$ {formatPrice(item.price)}</ItemPrice>
												</div>
											</div>
										</DesktopCell>
										<DesktopCell>
											<QuantityControl>
												<IconRemove 
													onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
													style={{ cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer' }}
													onMouseEnter={(e) => {
														if (item.quantity <= 1) {
															e.currentTarget.style.opacity = '0.5';
														}
													}}
													onMouseLeave={(e) => {
														e.currentTarget.style.opacity = '1';
													}}
												/>
												<QuantityInput 
													type="text" 
													value={item.quantity}
													onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
													min="1"
												/>
												<IconAdd 
													onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
												/>
											</QuantityControl>
										</DesktopCell>
										<DesktopCell>
											<SubtotalValue>R$ {formatPrice(item.price * item.quantity)}</SubtotalValue>
										</DesktopCell>
										<DesktopCell>
											<IconTrash onClick={() => removeItem(item.id)} />
										</DesktopCell>
									</DesktopRow>
								))}
							</DesktopTable>
						</div>

						<CartFooter>
							<TotalSection>
								<TotalLabel>TOTAL</TotalLabel>
								<TotalValue>R$ {formatPrice(getTotalPrice())}</TotalValue>
							</TotalSection>
							<FinishButton onClick={handleFinishOrder}>FINALIZAR PEDIDO</FinishButton>
						</CartFooter>
					</>
				)}
			</Card>
		</Container>
	)
}
