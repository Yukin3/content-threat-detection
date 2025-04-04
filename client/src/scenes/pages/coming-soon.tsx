import { HeartCrack } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <HeartCrack size={72} />
        <h1 className='text-4xl font-bold leading-tight'>Coming Soon</h1>
        <p className='text-center text-muted-foreground'>
          Sorry to disappoint but this page isn't ready yet. :( <br />
          I'm working hard and will have it ready soon!
        </p>
      </div>
    </div>
  )
}
