import { SBackColor } from './SUserView.styled';
import {
  SColumn,
  SColumns,
  SList,
  SListItem,
  SSecondColumn,
} from './SUserView.styled';
import { Link } from 'react-router-dom';
import EditReportView from '../EditReportView/EditReportView';
export default function UserView() {
  return (
    <SBackColor>
      <SColumns>
        <SColumn>
          <SList>
            <Link to='/editReport'>
              <SListItem>Edit report</SListItem>
            </Link>
            <SListItem>my favorites</SListItem>
            <SListItem>my cart</SListItem>
          </SList>
        </SColumn>
      </SColumns>
    </SBackColor>
  );
}
