'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        {
            scope: containerRef,
        },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        {
            scope: containerRef,
        },
    );

    return (
        <section id="my-experience" className="section-spacing">
            <div ref={containerRef} className="container">
                <SectionTitle title="My Experience" />

                <div className="space-y-6 md:space-y-8">
                    <div className="experience-item">
                        <h3 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-muted-foreground">
                            {MY_EXPERIENCE.company}
                        </h3>
                    </div>

                    <div className="relative border-l border-white/10 pl-8 pr-1 md:pr-3 lg:pr-0">
                        {MY_EXPERIENCE.roles.map((role, index) => (
                            <div
                                key={role.title}
                                className={`experience-item relative ${
                                    index !== MY_EXPERIENCE.roles.length - 1
                                        ? 'pb-12'
                                        : ''
                                }`}
                            >
                                <span className="absolute -left-8 top-7 h-px w-8 bg-white/10" />

                                <div className="rounded-2xl border border-white/10 bg-background-light p-5 md:p-6">
                                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                                        <h4 className="font-anton text-xl md:text-2xl lg:text-3xl">
                                            {role.title}
                                        </h4>

                                        <p className="text-sm lg:text-base text-muted-foreground">
                                            {role.duration}
                                        </p>
                                    </div>

                                    <ul className="mt-5 space-y-2">
                                        {role.responsibilities.map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-start gap-2 text-sm lg:text-base leading-relaxed text-muted-foreground"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
