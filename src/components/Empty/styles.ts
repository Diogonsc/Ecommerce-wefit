import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);
	margin: 0 auto;
	padding: 0 1rem 3.9775rem 1rem;

	@media (min-width: 768px) {
		width: 1080px;
	}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--white);
  padding: 4rem 4.625rem;
  text-align: center;

	@media (min-width: 768px) {
		padding: 4rem 4.625rem 8.9775rem 4.625rem;
	}
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--black);
  text-align: center;
	margin-bottom: 1.5rem;
`;

export const Picture = styled.picture`
  height: auto;
  display: block;

  &.mobile-image {
    display: block;
    width: 10.8125rem;
  }

  &.desktop-image {
    display: none;
  }

  @media (min-width: 768px) {
    &.mobile-image {
      display: none;
    }

    &.desktop-image {
      display: block;
      width: 27.9375rem;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ButtonRefresh = styled.button`
	width: 10.8125rem;
	height: 2.5rem;
  background-color: var(--blue);
  color: var(--white);
	font-size: 0.75rem;
	font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
	margin-top: 1.5rem;
`;
