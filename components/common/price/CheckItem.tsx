const CheckItem = ({ text }: { text: string }) => (
  <div className='flex items-center gap-2'>
    <p className="item-price relative pt-0.5 text-sm text-gray-80 before:absolute before:left-0 before:-translate-x-[150%] before:text-blue-90 before:content-['✔'] dark:text-gray-70 dark:before:text-blue-85">
      {text}
    </p>
  </div>
);

export default CheckItem;
