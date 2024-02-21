import { ReactElement } from 'react';
import { useAppSelector } from '@hooks/reduxHooks';
import { RootState } from '@store/store';
import {
  Block,
  ColoredBlock,
  ScrollBlock,
} from '@components/styledComponents/Blocks';
import { BoldText } from '@components/styledComponents/Text';

function EpisodesList(): ReactElement {
  const episodes = useAppSelector((state: RootState) => state.episode);

  const content = episodes.data.map((item, index) => {
    return (
      <ColoredBlock
        background_color={'white'}
        direction={'column'}
        gap={'10px'}
        border_radius={'10px'}
        key={index}
      >
        <div>Name: {item.name}</div>
        <div>Air date: {item.air_date}</div>
        <div>Episode: {item.episode}</div>
      </ColoredBlock>
    );
  });

  return (
    <>
      {episodes.data.length > 0 && (
        <Block direction={'column'}>
          <BoldText font_size={'24px'}>Related episodes:</BoldText>
          <ScrollBlock
            direction={'column'}
            height={'47vh'}
            gap={'10px'}
            justify_content={'flex-start'}
          >
            {content}
          </ScrollBlock>
        </Block>
      )}
    </>
  );
}

export default EpisodesList;
