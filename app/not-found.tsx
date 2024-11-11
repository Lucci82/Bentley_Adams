import Link from 'next/link';

export default async function Component() {
  return (
    <div className='flex items-center justify-center min-h-[400px] flex-col space-y-2 text-center'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>Page Not Found</h1>
        <p className='text-gray-500'>The page you are looking for could not be found.</p>
      </div>
      <Link href='/'>
        <button className='w-full max-w-xs mt-4'>Go back home</button>
      </Link>
    </div>
  );
}
