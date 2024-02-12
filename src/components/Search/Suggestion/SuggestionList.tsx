import { ReactElement } from 'react';
import { ColoredAbsoluteBlock, Block } from '../searchStyles';

type Props = {
  suggestions: string[];
};

function SuggestionList({ suggestions }: Props): ReactElement {
  const suggestionsList = suggestions.map((suggestion, index) => {
    return (
      <Block border_radius={'10px'} background_hover={'#adb0b3'} key={index}>
        {suggestion}
      </Block>
    );
  });
  return (
    <ColoredAbsoluteBlock
      width={'30%'}
      justify_content={'space-around'}
      background_color={'white'}
      top={'18%'}
      direction={'column'}
      border_radius={'10px'}
      gap={'5px'}
      z_index={'1'}
    >
      {suggestionsList}
    </ColoredAbsoluteBlock>
  );
}

export default SuggestionList;
