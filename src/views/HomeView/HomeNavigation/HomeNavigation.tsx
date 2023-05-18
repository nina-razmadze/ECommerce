import { SHomeNavigation } from './SHomeNavigation.styled';
import { SNavHeader } from './SHomeNavigation.styled';
import { SNavListItem } from './SHomeNavigation.styled';
import { SListTitle } from './SHomeNavigation.styled';
import { FormattedMessage } from 'react-intl';

import { FaMobileAlt } from 'react-icons/fa';
import { ImHeadphones } from 'react-icons/im';
import { MdLaptopChromebook } from 'react-icons/md';
import { MdAudiotrack } from 'react-icons/md';
import { TbDeviceGamepad2 } from 'react-icons/tb';
import { MdOutlineScreenshotMonitor } from 'react-icons/md';
import { BsCameraFill } from 'react-icons/bs';
import { IoMdList } from 'react-icons/io';

export default function HomeNavigation() {
  return (
    <SHomeNavigation
      className='font-sans

'
    >
      <SNavHeader>
        <IoMdList size={30} />
        <SListTitle>
          <FormattedMessage id='List' />
        </SListTitle>
      </SNavHeader>
      <div>
        <SNavListItem>
          <FaMobileAlt size={20} />
          <SListTitle>
            <FormattedMessage id='Mobile phones' />
          </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <ImHeadphones size={20} />
          <SListTitle>
            <FormattedMessage id='Tabs' /> <span> | </span>
            <FormattedMessage id='Accessories' />
          </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <MdLaptopChromebook size={20} />
          <SListTitle>
            <FormattedMessage id='Leptops' /> <span> | </span> IT
          </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <MdAudiotrack size={20} />{' '}
          <SListTitle>
            <FormattedMessage id='Audio system' />
          </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <TbDeviceGamepad2 size={20} />
          <SListTitle>
            <FormattedMessage id='Gaming' />
          </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <MdOutlineScreenshotMonitor size={20} />
          <SListTitle>
            <FormattedMessage id='TV' /> <span> | </span>
            <FormattedMessage id='Monitor' />
          </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <BsCameraFill size={20} />
          <SListTitle>
            <FormattedMessage id='Photo' /> <span> | </span>
            <FormattedMessage id='Video' />
            <span> | </span>
            <FormattedMessage id='Optics' />
          </SListTitle>
        </SNavListItem>
      </div>
    </SHomeNavigation>
  );
}
// 1
