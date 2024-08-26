import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs/Tabs';
import { PricingSwitchProps } from '@/shared/types/type';

const PricingSwitch: React.FC<PricingSwitchProps> = ({ onSwitch }) => (
  <Tabs defaultValue='0' className='mx-auto w-40' onValueChange={onSwitch}>
    <TabsList className='px-2 py-4'>
      <TabsTrigger value='0' className='text-base'>
        Monthly
      </TabsTrigger>
      <TabsTrigger value='1' className='text-base'>
        Yearly
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

export default PricingSwitch;
