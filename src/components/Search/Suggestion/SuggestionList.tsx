import { ReactElement } from 'react';
import { ColoredAbsoluteBlock, Block } from '../searchStyles';

type Props = {
  suggestions: string[];
};

function SuggestionList({ suggestions }: Props): ReactElement {
  const suggestionsList = suggestions.map((suggestion, index) => {
    return (
      <Block border_radius={'10px'} background_hover={'#E6DBD5'} key={index}>
        {suggestion}
      </Block>
    );
  });
  return (
    <ColoredAbsoluteBlock
      width={'40%'}
      justify_content={'space-around'}
      background_color={'white'}
      top={'20%'}
      direction={'column'}
      border_radius={'10px'}
      gap={'5px'}
    >
      {suggestionsList}
    </ColoredAbsoluteBlock>
  );
}

export default SuggestionList;
