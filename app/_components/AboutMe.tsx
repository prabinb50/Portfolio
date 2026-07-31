'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, useGSAP);

const ABOUT_PARAGRAPHS = [
    `I'm a Software Engineer and React/Next.js Developer with industry experience building secure, scalable, and user-focused web applications. I'm passionate about transforming ideas into reliable digital products through clean architecture, modern technologies, and thoughtful engineering.`,

    `I believe exceptional software is built through continuous learning, attention to detail, and solving real-world problems. Whether I'm developing full-stack applications, exploring new technologies, or improving existing products, I strive to write clean code that delivers lasting value to users.`,
];

export default function AboutMe() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: containerRef.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="about-me" className="section-spacing">
            <div ref={containerRef} className="container">
                <h2 className="slide-up-and-fade max-w-6xl font-light text-xl md:text-2xl lg:text-4xl">
                    Every project is an opportunity to learn, solve meaningful
                    challenges, and create software that delivers real value to
                    both users and businesses.
                </h2>

                <div className="slide-up-and-fade mt-14 border-b border-white/10 pb-3">
                    <p className="text-sm uppercase tracking-[0.1em] text-muted-foreground">
                        About Me
                    </p>
                </div>

                <div className="mt-10 grid md:grid-cols-12 gap-6 md:gap-0">
                    <div className="md:col-span-5">
                        <h3 className="slide-up-and-fade font-anton text-3xl md:text-4xl lg:text-5xl">
                            Hi, I&apos;m <br className="hidden md:block" />
                            <span className="text-primary">Prabin Joshi.</span>
                        </h3>
                    </div>

                    <div className="md:col-span-7">
                        <div className="space-y-3 text-sm lg:text-base leading-relaxed md:leading-7 text-muted-foreground">
                            {ABOUT_PARAGRAPHS.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="slide-up-and-fade"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
