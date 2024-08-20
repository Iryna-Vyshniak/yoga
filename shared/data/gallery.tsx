import YOGA1 from '@/public/assets/images/yoga-gallery-1.webp';
import YOGA2 from '@/public/assets/images/yoga-gallery-2.webp';
import YOGA3 from '@/public/assets/images/yoga-gallery-3.webp';

import { GalleryItem } from '../types/type';

export const gallery: GalleryItem[] = [
  {
    id: 'scroller-slide-1',
    href: '#scroller-slide-1',
    source: YOGA1,
    label: '--scroller-slide-1',
    num: '01',
    title: 'YOGA vibe',
    slogan: 'find balance',
    description:
      'Discover the harmony between body and mind by immersing yourself in a practice that helps you find balance in the modern world. Feel connected with nature and yourself.',
    url_img: '/assets/images/yoga-gallery-1.webp',
  },
  {
    id: 'scroller-slide-2',
    href: '#scroller-slide-2',
    source: YOGA2,
    label: '--scroller-slide-2',
    num: '02',
    title: 'YOGA vibe',
    slogan: 'greater self control',
    description:
      'Strengthen your inner world and learn to better control your emotions and thoughts. Yoga practice helps you achieve greater self-discipline and harmony in life.',
    url_img: '/assets/images/yoga-gallery-2.webp',
  },
  {
    id: 'scroller-slide-3',
    href: '#scroller-slide-3',
    source: YOGA3,
    label: '--scroller-slide-3',
    num: '03',
    title: 'YOGA vibe',
    slogan: 'embrace harmony',
    description:
      'Embrace harmony by combining physical exercises with spiritual practice. Yoga is the path to inner peace and unity with the world around you.',
    url_img: '/assets/images/yoga-gallery-3.webp',
  },
];
