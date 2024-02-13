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
      <Item onClick={onClick} border_radius={'10px'} key={index}>
        {suggestion}
      </Item>
    );
  });

  const SuggectionsPanel = (
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

  const content = suggestions.length ? SuggectionsPanel : null;
  return <>{content}</>;
}

export default SuggestionList;
