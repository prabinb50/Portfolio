'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO, MY_STATS } from '@/lib/data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Banner() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section
            id="banner"
            className="relative overflow-hidden section-spacing-top section-spacing-bottom"
        >
            <ArrowAnimation />

            <div
                ref={containerRef}
                className="container lg:flex lg:min-h-screen lg:items-center"
            >
                <div className="relative flex w-full flex-col justify-center lg:min-h-[670px]">
                    <div className="max-w-4xl">
                        <h1 className="slide-up-and-fade font-anton text-4xl md:text-5xl lg:text-6xl">
                            <span className="text-primary">
                                Software Developer
                            </span>
                            <br />
                            <span className="ml-4">
                                & React/Next.js Developer
                            </span>
                        </h1>

                        <p className="slide-up-and-fade mt-8 max-w-3xl text-sm lg:text-base leading-relaxed md:leading-7 text-muted-foreground">
                            Hi! I&apos;m{' '}
                            <span className="font-semibold text-foreground">
                                Prabin Joshi
                            </span>
                            , a Software Developer specializing in Next.js,
                            TypeScript, MERN Stack, and modern web technologies.
                            I build scalable, secure, and high-performance web
                            applications with a strong focus on clean
                            architecture, maintainable code, and exceptional
                            user experiences.
                        </p>

                        <div className="slide-up-and-fade mt-10 flex flex-col items-start gap-4 md:gap-5 md:flex-row md:items-center">
                            <Button
                                as="link"
                                href={GENERAL_INFO.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="primary"
                            >
                                Let&apos;s Connect
                            </Button>

                            <div className="flex items-center gap-3">
                                <span className="relative flex size-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                                    <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                                </span>

                                <span className="text-sm text-muted-foreground">
                                    Open to Full-Time Software Engineering Roles
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* stats */}
                    <div className="slide-up-and-fade mt-12 grid grid-cols-2 gap-10 border-t border-white/10 pt-10 md:grid-cols-4 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:flex lg:flex-col lg:gap-6 lg:border-none lg:pt-0">
                        {MY_STATS.map((stat) => (
                            <div
                                key={stat.label}
                                className="text-left lg:text-right"
                            >
                                <h3 className="font-anton text-primary text-3xl md:text-4xl">
                                    {stat.value}
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
