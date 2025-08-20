import { Button, 	CardContainer, CardInfo, Container, CountIten, IconCart, Image, Picture, Price, TextButton, Title } from "./styles";
import { useProducts } from "../../hooks/useProducts";
import type { Card } from "./schema";
import { formatPrice } from "../../utils";
import { Empty } from "../Empty";
import { Loader } from "../Loader";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

export function Card() {
	const { data, isLoading, error } = useProducts();
	const { addItem, getItemQuantity } = useCart();
	const navigate = useNavigate();
	const cards = data?.products || [];

	useEffect(() => {
		if (error) {
			toast.error("Erro ao buscar produtos. Por favor, tente novamente.");
		}
	}, [error]);

	const handleAddToCart = (card: Card) => {
		addItem({
			id: card.id,
			title: card.title,
			price: card.price,
			image: card.image,
		});
		toast.success(`${card.title} adicionado ao carrinho!`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
	};

	if (isLoading) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	if (error) {
		return (
			<Container>
				<Empty title="Erro ao buscar produtos. Por favor, tente novamente." buttonText="Recarregar página" onButtonClick={() => window.location.reload()} />
			</Container>
		);
	}

	if (!cards || cards.length === 0) {
		return <Empty title="Parece que não há nada por aqui :(" buttonText="Voltar para tela inicial" onButtonClick={() => navigate('/')} />
	}

	return (
		<Container>
			<CardContainer>
				{cards.map((card: Card) => {
					const itemQuantity = getItemQuantity(card.id);
					const isInCart = itemQuantity > 0;
					
					return (
						<CardInfo key={card.id}>
							<Picture>
								<source srcSet={card.image} media="(min-width: 768px)" />
								<source srcSet={card.image} media="(max-width: 767px)" />
								<Image 
									src={card.image} 
									alt={card.title} 
									loading="lazy" 
									decoding="async"
								/>
							</Picture>
							<Title>{card.title}</Title>
							<Price>R$ {formatPrice(card.price)}</Price>
							<Button 
								onClick={() => handleAddToCart(card)}
								$isInCart={isInCart}
							>
								<IconCart />
								<CountIten>{itemQuantity}</CountIten>
								<TextButton>Adicionar ao carrinho</TextButton>
							</Button>
						</CardInfo>
					);
				})}
			</CardContainer>
		</Container>
	)
}