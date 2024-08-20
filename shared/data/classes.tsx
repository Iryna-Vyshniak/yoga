import YOGA2 from '@/public/assets/images/yoga-pose-3.webp';
import YOGA1 from '@/public/assets/images/yoga-pose-5.webp';
import YOGA3 from '@/public/assets/images/yoga-pose-6.webp';

import { ClassItem } from '../types/type';

export const CLASSES: ClassItem[] = [
  {
    id: 'class-1',
    title: 'Hatha Yoga',
    description:
      'Includes physical exercises, breathing techniques, and meditation to help you wake up, increase your energy level, and prepare you for a full day ahead.',
    image: YOGA1,
  },
  {
    id: 'class-2',
    title: 'Health + Consciousness',
    description:
      'Improvement of physical and mental abilities. Enhancement of clarity and development of the sense of self.',
    image: YOGA2,
  },
  {
    id: 'class-3',
    title: 'Active Yoga',
    description:
      'This intensive is suitable for beginners as well as for those who already practice yoga. Deep work with breathing and stretch holding.',
    image: YOGA3,
  },
];
