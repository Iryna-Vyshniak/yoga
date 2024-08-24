import React from 'react';

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <section className='my-8 text-center'>
    <h2 className='text-gray-800 mb-2 text-center font-tanNimbus text-3xl x:mb-8'>
      {title}
    </h2>
    {subtitle && <p className='mt-4 text-xl'>{subtitle}</p>}
  </section>
);

export default SectionHeader;
