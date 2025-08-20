import { Cart, Container, Icon, Logo } from "./styles";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { getTotalItems } = useCart();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Container>
			<Logo onClick={handleLogoClick} style={{ cursor: 'pointer' }}>WeMovies</Logo>
			<Cart onClick={handleCartClick} style={{ cursor: 'pointer' }}>
				<div>
					<p>Carrinho</p>
					<span>{getTotalItems()} itens</span>
				</div>
				<Icon />
			</Cart>
    </Container>
  );
}