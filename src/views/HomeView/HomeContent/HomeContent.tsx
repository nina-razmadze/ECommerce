import { Slider } from '@src/components/Slider';
import { ScrollCarousel } from './ScrollCarousel';

export default function HomeContent() {
  return (
    <div className='bg-zinc-800'>
      <Slider />
      <ScrollCarousel />
    </div>
  );
}
