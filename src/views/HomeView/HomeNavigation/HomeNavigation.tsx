import { SHomeNavigation } from './SHomeNavigation.styled';
import { SNavHeader } from './SHomeNavigation.styled';
import { SNavListItem } from './SHomeNavigation.styled';
import { SListTitle } from './SHomeNavigation.styled';

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
    <SHomeNavigation>
      <SNavHeader>
        <IoMdList size={30} />
        <SListTitle>ჩამონათვალი</SListTitle>
      </SNavHeader>
      <div>
        <SNavListItem>
          <FaMobileAlt size={20} /> <SListTitle>მობილურები</SListTitle>
        </SNavListItem>

        <SNavListItem>
          <ImHeadphones size={20} />
          <SListTitle>ტაბები | აქსესუარები </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <MdLaptopChromebook size={20} />{' '}
          <SListTitle>ლეპტოპები | IT</SListTitle>
        </SNavListItem>

        <SNavListItem>
          <MdAudiotrack size={20} /> <SListTitle>აუდიო სისტემა</SListTitle>
        </SNavListItem>

        <SNavListItem>
          <TbDeviceGamepad2 size={20} /> <SListTitle>Gaming</SListTitle>
        </SNavListItem>

        <SNavListItem>
          <MdOutlineScreenshotMonitor size={20} />
          <SListTitle>ტელევიზორი | მონიტორი </SListTitle>
        </SNavListItem>

        <SNavListItem>
          <BsCameraFill size={20} />
          <SListTitle>ფოტო | ვიდეო | ოპტიკა</SListTitle>
        </SNavListItem>
      </div>
    </SHomeNavigation>
  );
}
// 1
