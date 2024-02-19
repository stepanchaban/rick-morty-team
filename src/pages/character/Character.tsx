import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterQuery } from '@services/rickMorthyApi';
import HeartButton from '@components/CardList/Card/HeartButton';
import { Block, ColoredBlock } from '@components/styledComponents/Blocks';
import { BoldText, Text } from '@components/styledComponents/Text';
import { VerticalSeparator } from '@components/styledComponents/Separators';

function Character(): ReactElement {
  const { characterId } = useParams();
  const { data, error, isLoading } = useGetCharacterQuery(String(characterId));

  const content = isLoading ? (
    <div>Loading...</div>
  ) : (
    <ColoredBlock
      width={'50%'}
      border_radius={'10px'}
      background_color={'white'}
      gap={'20%'}
    >
      <Block width={'auto'} position={'relative'}>
        <img src={data?.image} title="character" />
        <HeartButton />
      </Block>
      <Block width={'auto'} direction="column">
        <BoldText font_size={'34px'}>{data?.name}</BoldText>
        <VerticalSeparator height={'40px'} />
        <Text font_size={'18px'}>Birthdate: {parseDate(data?.created)}</Text>
        <Text font_size={'18px'}>Species: {data?.species}</Text>
        <Text font_size={'18px'}>Gender: {data?.gender}</Text>
        <Text font_size={'18px'}>Status: {data?.status}</Text>
        <Text font_size={'18px'}>Location: {data?.location.name}</Text>
        <Text font_size={'18px'}>Origin: {data?.origin?.name}</Text>
      </Block>
    </ColoredBlock>
  );

  return (
    <ColoredBlock height={'80vh'} background_color={'#bbccfb'}>
      {content}
    </ColoredBlock>
  );
}

export default Character;

function parseDate(date: string | undefined): string {
  if (date) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    return `${year}-${month}-${day}`;
  }
  return '';
}
