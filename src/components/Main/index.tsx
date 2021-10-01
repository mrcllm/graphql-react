import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>TS, REACTJS, Styled Components</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um Desenvolvedor de frente para uma tela"
    />
  </S.Wrapper>
);

export default Main;
