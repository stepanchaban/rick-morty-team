import ErrorImage from '@sources/images/error-image.png';
import { Block } from '@components/styledComponents/Blocks';
import { Text } from '@components/styledComponents/Text';
import { ReactElement } from 'react';

function Error(): ReactElement {
  return (
    <Block direction={'column'}>
      <Block width={'50%'}>
        <img width={'100%'} src={ErrorImage} alt="error" />
      </Block>
      <Text font_size={'24px'}>Ooooops! Something went wrong!</Text>
    </Block>
  );
}

export default Error;
