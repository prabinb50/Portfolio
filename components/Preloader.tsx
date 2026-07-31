'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

const NAME = 'PRABIN JOSHI';
const BARS = Array.from({ length: 10 });

export default function Preloader() {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.preloader-letter', {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.2,
            });

            tl.to(
                '.preloader-subtitle',
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                },
                '-=0.05',
            );

            tl.to('.preloader-item', {
                delay: 1,
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to(
                    '.preloader-letter',
                    {
                        autoAlpha: 0,
                    },
                    '<0.5',
                )

                .to(
                    '.preloader-subtitle',
                    {
                        autoAlpha: 0,
                        duration: 0.15,
                    },
                    '<',
                )

                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div
            ref={preloaderRef}
            aria-hidden="true"
            className="fixed inset-0 z-[999] flex"
        >
            <div className="absolute inset-0 flex">
                {BARS.map((_, index) => (
                    <div
                        key={index}
                        className="preloader-item h-full flex-1 bg-black"
                    />
                ))}
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="flex overflow-hidden font-anton leading-none text-[18vw] md:text-[13vw] lg:text-[180px]">
                    {NAME.split('').map((letter, index) => (
                        <span
                            key={index}
                            className={`preloader-letter inline-block translate-y-full opacity-0 ${
                                letter !== ' ' && index >= NAME.indexOf('J')
                                    ? 'text-primary'
                                    : ''
                            }`}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </h1>

                <span className="preloader-subtitle mt-4 translate-y-2 text-[11px] md:text-xs uppercase tracking-[0.45em] text-muted-foreground opacity-0">
                    React/Next.js Developer
                </span>
            </div>
        </div>
    );
}
