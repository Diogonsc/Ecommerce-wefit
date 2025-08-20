
import { ButtonGoToHome, Container, Content, Image, Picture, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useEffect } from "react";
import ImageSuccessMobile from "../../assets/ImageSuccessMobile.webp";
import ImageSuccess from "../../assets/ImageSuccess.webp";

export const Checkout = () => {
	const navigate = useNavigate();
	const { clearCart } = useCart();

	useEffect(() => {
		clearCart();
	}, [clearCart]);

	const handleGoToHome = () => {
		navigate("/");
	};

	return (
		<Container>
			<Content>
				<Picture className="mobile-image">
					<source srcSet={ImageSuccessMobile} media="(max-width: 767px)" />
					<Image 
						src={ImageSuccessMobile} 
						alt="Compra realizada com sucesso" 
						loading="lazy" 
						decoding="async"
					/>
				</Picture>
				<Picture className="desktop-image">
					<source srcSet={ImageSuccess} media="(min-width: 768px)" />
					<Image 
						src={ImageSuccess} 
						alt="Compra realizada com sucesso" 
						loading="lazy" 
						decoding="async"
					/>
				</Picture>
				<Title>Compra realizada com sucesso!</Title>
				<ButtonGoToHome onClick={handleGoToHome}>
					Voltar ao início
				</ButtonGoToHome>
			</Content>
		</Container>
	);
};
