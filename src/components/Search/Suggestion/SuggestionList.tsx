import { ReactElement } from 'react';
import { ColoredAbsoluteBlock } from '@components/styledComponents/Blocks';
import { List, Item } from '@components/styledComponents/List';

type Props = {
  suggestions: string[];
  selectSuggestion: (selectedSuggestion: string) => void;
};

function SuggestionList({
  suggestions,
  selectSuggestion,
}: Props): ReactElement {
  const suggestionsList = suggestions.map((suggestion, index) => {
    function onClick(): void {
      selectSuggestion(suggestion);
    }
    return (
      <Item
        onClick={onClick}
        border_radius={'10px'}
        background_hover={'#adb0b3'}
        key={index}
      >
        {suggestion}
      </Item>
    );
  });
  return (
    <ColoredAbsoluteBlock
      width={'30%'}
      justify_content={'space-around'}
      background_color={'white'}
      top={'20%'}
      direction={'column'}
      border_radius={'10px'}
      gap={'5px'}
      z_index={'1'}
    >
      <List>{suggestionsList}</List>
    </ColoredAbsoluteBlock>
  );
}

export default SuggestionList;
