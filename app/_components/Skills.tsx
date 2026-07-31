'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MY_STACK } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" className="section-spacing">
            <div ref={containerRef} className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-14 sm:space-y-16">
                    {Object.entries(MY_STACK).map(([category, skills]) => (
                        <div
                            key={category}
                            className="grid sm:grid-cols-12 gap-4 md:gap-0"
                        >
                            <div className="sm:col-span-5">
                                <h3 className="slide-up font-anton text-3xl sm:text-4xl lg:text-5xl text-muted-foreground uppercase">
                                    {category}
                                </h3>
                            </div>

                            <div className="sm:col-span-7 pr-1 md:pr-3 lg:pr-0">
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                                    {skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="slide-up flex items-center gap-2 lg:gap-3 group rounded-2xl border border-white/10 bg-background-light p-3 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <Image
                                                src={skill.icon}
                                                alt={skill.name}
                                                width={36}
                                                height={36}
                                                className="h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                            />

                                            <span className="text-sm lg:text-lg">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
