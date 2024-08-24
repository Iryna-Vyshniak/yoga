import { cn } from '@/lib/utils';

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <article
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className,
      )}
      {...props}
    />
  );
};

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  );
};

const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3
      className={cn(
        'tracking-tight text-2xl font-semibold leading-none',
        className,
      )}
      {...props}
    >
      {children}
      {!children && <span className='sr-only'>Card Title</span>}
    </h3>
  );
};

const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props} />
  );
};

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
};

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
