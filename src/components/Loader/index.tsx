import { Container, ImageLoader, PictureLoader } from "./styles";
import Image from "../../assets/Loader.svg";

export const Loader = () => {
	return (
		<Container>
			<PictureLoader>
				<source srcSet={Image} media="(min-width: 768px)" />
				<source srcSet={Image} media="(max-width: 767px)" />
				<ImageLoader 
					src={Image} 
					alt="Carregando..." 
					loading="lazy" 
					decoding="async"
				/>
			</PictureLoader>
		</Container>
	);
};