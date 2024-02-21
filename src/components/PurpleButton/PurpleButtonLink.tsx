import { ReactElement } from 'react';
import { NavLink } from '@components/styledComponents/Link';
import PurpleButton from './PurpleButton';

type Props = {
  path: string;
  text: string;
};

function PurpleButtonLink({ path, text }: Props): ReactElement {
  return (
    <NavLink width={'50%'} to={path}>
      <PurpleButton text={text} />
    </NavLink>
  );
}

export default PurpleButtonLink;
