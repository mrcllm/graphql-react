import { CloseOutline } from '@styled-icons/evaicons-outline';
import LinkWrapper from 'components/LinkWrapper';
import * as S from './styles';

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
      cumque. Nesciunt eligendi modi quidem, maxime recusandae tenetur fuga quo
      debitis. Incidunt labore, dolor dolores sit fugiat dicta quas suscipit
      atque.
    </S.Body>
  </S.Content>
);

export default AboutTemplate;
