import { ButtonRefresh, Container, Content, Image, Picture, Title } from "./styles";
import ImageEmptyMobile from "../../assets/ImageEmptyMobile.webp";
import ImageEmpty from "../../assets/ImageEmpty.webp";
import type { Empty as EmptyType } from "./schema";

export const Empty = ({ 
	title,
	buttonText, 
	onButtonClick 
}: EmptyType) => {
	const handleButtonClick = () => {
		(onButtonClick as () => void)();
	};

	return (
		<Container>
			<Content>
				<Title>{title}</Title>
				<Picture className="mobile-image">
					<source srcSet={ImageEmptyMobile} media="(max-width: 767px)" />
					<Image 
						src={ImageEmptyMobile} 
						alt="Carrinho vazio" 
						loading="lazy" 
						decoding="async"
					/>
				</Picture>
				<Picture className="desktop-image">
					<source srcSet={ImageEmpty} media="(min-width: 768px)" />
					<Image 
						src={ImageEmpty} 
						alt="Carrinho vazio" 
						loading="lazy" 
						decoding="async"
					/>
				</Picture>
				<ButtonRefresh onClick={handleButtonClick}>
					{buttonText}
				</ButtonRefresh>
			</Content>
		</Container>
	);
};