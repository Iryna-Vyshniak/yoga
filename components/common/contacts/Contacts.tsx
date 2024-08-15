import React from 'react';

import Icon, {
  commonIcons,
  iconSizes,
  iconTypes,
} from '@/components/ui/icon/Icon';
import data from '@/shared/data/common.json';
import linkContacts from '@/shared/data/linkContacts.json';

const Contacts = () => {
  const { phone, mail } = data.icons;
  return (
    <ul className='sOnly:hidden gap-4 md:flex md:flex-col md:items-start md:gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-6 smOnly:hidden'>
      {linkContacts.map(({ name, href, ariaLabel, label }) => (
        <li
          key={name}
          className='text-slate-800 duration-250 cursor-pointer text-xs transition-all ease-in-out hover:text-blue-90 focus:text-accent dark:text-white hover:dark:text-blue-60 xl:text-base'
        >
          <a
            href={href}
            aria-label={ariaLabel}
            className='flex items-center justify-center gap-2'
          >
            <Icon
              type={iconTypes.COMMON}
              name={name === 'phone' ? commonIcons.PHONE : commonIcons.MAIL}
              size={name === 'phone' ? iconSizes.SMALL : iconSizes.CUSTOM}
              ariaLabel={name === 'phone' ? phone.ariaLabel : mail.ariaLabel}
              className='duration-250 cursor-pointer text-xs text-blue-90 transition-all ease-in-out hover:text-blue-90 focus:text-accent dark:text-blue-60 hover:dark:text-blue-60'
            />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
