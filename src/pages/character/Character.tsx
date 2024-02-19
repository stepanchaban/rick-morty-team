import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCharacterQuery } from '@services/rickMorthyApi';
import HeartButton from '@components/CardList/Card/HeartButton';
import { Block, ColoredBlock } from '@components/styledComponents/Blocks';
import { BoldText, Text } from '@components/styledComponents/Text';
import { VerticalSeparator } from '@components/styledComponents/Separators';
import PurpleButton from '@components/PurpleButton/PurpleButton';
import { LoadingSpinner } from '@components/Loader/LoadingSpinner';
import Error from '@components/Error/Error';

function Character(): ReactElement {
  const { characterId } = useParams();
  const { data, isError, isLoading } = useGetCharacterQuery(
    String(characterId),
  );

  let content;

  if (data) {
    content = (
      <CharacterCard
        image={data.image}
        name={data.name}
        created={data.created}
        species={data.species}
        gender={data.gender}
        status={data.status}
        locationName={data.location.name}
        origin={data.origin?.name || ''}
      />
    );
  }

  if (isError) {
    content = <Error />;
  }

  if (isLoading) {
    content = <LoadingSpinner />;
  }

  return (
    <ColoredBlock
      height={'80vh'}
      background_color={'#bbccfb'}
      direction="column"
    >
      {content}
      <VerticalSeparator height={'40px'} />
      <PurpleButton path={'/characters'} text={'Back to characters'} />
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

function CharacterCard({
  image,
  name,
  created,
  species,
  gender,
  status,
  locationName,
  origin,
}: CharacterContentProps): ReactElement {
  return (
    <ColoredBlock
      width={'50%'}
      height={'50vh'}
      border_radius={'10px'}
      background_color={'white'}
      gap={'10%'}
    >
      <Block width={'auto'} position={'relative'}>
        <img src={image} title="character" />
        <HeartButton />
      </Block>
      <Block width={'auto'} direction="column">
        <BoldText font_size={'34px'}>{name}</BoldText>
        <VerticalSeparator height={'40px'} />
        <Text font_size={'18px'}>Birthdate: {parseDate(created)}</Text>
        <Text font_size={'18px'}>Species: {species}</Text>
        <Text font_size={'18px'}>Gender: {gender}</Text>
        <Text font_size={'18px'}>Status: {status}</Text>
        <Text font_size={'18px'}>Location: {locationName}</Text>
        <Text font_size={'18px'}>Origin: {origin}</Text>
      </Block>
    </ColoredBlock>
  );
}

type CharacterContentProps = {
  image: string;
  name: string;
  created: string;
  species: string;
  gender: string;
  status: string;
  locationName: string;
  origin: string;
};
