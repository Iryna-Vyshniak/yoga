import { Button } from '@/components/ui/button/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/Card';
import { cn } from '@/lib/utils';
import { PricingCardProps } from '@/shared/types/type';

import CheckItem from './CheckItem';

const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  exclusive,
  schedule,
  yearlyFeatures,
  yearlySchedule,
  yearlyDescription,
}: PricingCardProps) => (
  <Card
    className={cn(
      `relative mx-auto flex w-full max-w-sm flex-col justify-between px-6 py-4 dark:bg-dark-200 ${
        popular ? 'border-blue-70' : 'border-gray-60'
      }`,
      {
        'animate-background-shine bg-white bg-[linear-gradient(110deg,#d6e2f3,45%,#ffffff,55%,#d6e2f3)] bg-[length:200%_100%] transition-colors dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]':
          exclusive,
      },
    )}
  >
    <div className='absolute right-10 top-6 -translate-y-1/2 translate-x-1/2 transform'>
      <div className='bg-blue-500 card-pricing relative flex h-20 w-16 flex-col items-center justify-center px-4 py-2 text-center text-white'>
        <div className='text-lg font-semibold leading-none'>
          <span className='text-sm'>$</span>
          {isYearly && yearlyPrice ? yearlyPrice : monthlyPrice}
        </div>
        <span className='block text-xs'>/month</span>
      </div>
    </div>

    <div className='relative z-10 mt-8 flex flex-col gap-4'>
      <CardHeader className='pb-4 pt-4'>
        <CardTitle className='text-lg text-blue-90 dark:text-dark-700'>
          {title}
        </CardTitle>
        <CardDescription className='h-12 pt-1.5 text-dark-300 dark:text-white'>
          {isYearly && yearlyDescription ? yearlyDescription : description}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
        <p className='text-sm text-blue-90 dark:text-blue-80'>
          {isYearly && yearlySchedule ? yearlySchedule : schedule}
        </p>
        {(isYearly && yearlyFeatures ? yearlyFeatures : features).map(
          (feature: string) => (
            <CheckItem key={feature} text={feature} />
          ),
        )}
      </CardContent>
    </div>

    <CardFooter className='mt-2'>
      <Button variant='default' size='default'>
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
);

export default PricingCard;
