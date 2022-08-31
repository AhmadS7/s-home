import { Suspense } from 'react';
import Image from 'next/future/image';

import Container from '../components/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse justify-between items-start sm:flex-row">
            <div className="flex flex-col pr-8">
              <p className="text-rose-500 text-2xl dark:text-rose-400">
                Hi, my name is
              </p>
              <h1 className="font-bold text-3xl md:text-6xl -ml-0.5 mb-1 text-black dark:text-white">
                Ahmad Shah
              </h1>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Software Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I enjoy learning new things every day and building new things.
                Astrophysics enthusiast.{' '}
              </p>
            </div>
            <div className="w-[80px] sm:w-[200px] relative mb-8 sm:mb-0 ">
              <Image
                alt="Ahmad Shah"
                height={176}
                width={176}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <span className="h-15" />
          <div className="w-[80px] sm:w-[200px] relative mb-8 sm:mb-0 ">
            <Image
              alt="Bengal Tiger"
              height={176}
              width={230}
              src="/tiger.jpg"
              sizes="30vw"
              priority
              className="rounded-full filter"
            />
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
