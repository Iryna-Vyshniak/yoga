'use client';

import React, { useState } from 'react';

import AnimatedInView from '@/components/common/animated/AnimatedInView';
import PricingCard from '@/components/common/price/PricingCard';
import PricingSwitch from '@/components/common/price/PricingSwitch';
import Devider from '@/components/ui/devider/Devider';
import SectionHeader from '@/components/ui/section.header/SectionHeader';
import plans from '@/shared/data/plans.json';
import { Direction } from '@/shared/types/type';

const Prices = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);
  return (
    <section
      id='prices'
      className='section container-h custom-scroll mx-auto my-0 flex h-full items-center justify-center overflow-y-auto px-4 py-12 dark:bg-dark-linear-gradient sm:px-8'
    >
      <div className='container relative grid h-full grid-rows-[auto_auto_auto_1fr] place-content-center gap-4'>
        <AnimatedInView direction={Direction.Left} duration={1000} delay={200}>
          <SectionHeader
            title='Pricing and packages'
            subtitle="Choose the plan that's right for you"
          />
        </AnimatedInView>
        <AnimatedInView direction={Direction.Left} duration={1000} delay={220}>
          <Devider />
        </AnimatedInView>
        <AnimatedInView direction={Direction.Left} duration={1000} delay={230}>
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </AnimatedInView>

        <AnimatedInView direction={Direction.Left} duration={1000} delay={240}>
          <div className='grid justify-items-center gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-3'>
            {plans.map((plan) => {
              return (
                <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
              );
            })}
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};

export default Prices;
