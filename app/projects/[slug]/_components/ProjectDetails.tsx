'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';
import { isGroupedTechStack } from '@/lib/techStack';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectDetails({ project }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;
            gsap.set('.fade-in-later', {
                autoAlpha: 0,
                y: 30,
            });
            const tl = gsap.timeline({
                delay: 0.5,
            });
            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
            });
        },
        { scope: containerRef },
    );

    // blur info div and make it smaller on scroll
    useGSAP(
        () => {
            if (window.innerWidth < 992) return;
            gsap.to('#info', {
                filter: 'blur(3px)',
                autoAlpha: 0,
                scale: 0.9,
                scrollTrigger: {
                    trigger: '#info',
                    start: 'bottom bottom',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    // parallax effect on images
    useGSAP(
        () => {
            gsap.utils
                .toArray<HTMLDivElement>('#images > div')
                .forEach((imageDiv, i) => {
                    gsap.to(imageDiv, {
                        backgroundPosition: `center 0%`,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: imageDiv,
                            start: () => (i ? 'top bottom' : 'top 50%'),
                            end: 'bottom top',
                            scrub: true,
                        },
                    });
                });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-8 pb-14">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="text-xs md:text-sm inline-flex items-center gap-2 rounded-xl border p-2 transition-all hover:border-primary hover:text-primary mb-10 md:mb-12"
                >
                    <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-1" />
                    Back to Projects
                </TransitionLink>

                <div
                    id="info"
                    className="top-0 flex min-h-[calc(80svh-100px)] lg:min-h-[calc(100svh-100px)] pb-10"
                >
                    <div className="relative w-full">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl space-y-8">
                            <h3 className="fade-in-later text-3xl md:text-4xl lg:text-5xl font-anton leading-none">
                                {project.title}
                            </h3>

                            <div className="fade-in-later flex flex-wrap gap-4 text-xs md:text-sm">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border p-2 transition-all hover:border-primary hover:text-primary"
                                    >
                                        <ExternalLink size={18} />
                                        Visit Website
                                    </a>
                                )}

                                {project.sourceCode && (
                                    <a
                                        href={project.sourceCode}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border p-2 transition-all hover:border-primary hover:text-primary"
                                    >
                                        <Github size={18} />
                                        View Source
                                    </a>
                                )}
                            </div>

                            {/* overview */}
                            <div className="fade-in-later">
                                <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                                    Overview
                                </h4>

                                <p className="text-left text-sm lg:text-base leading-relaxed text-muted-foreground">
                                    {project.description.overview}
                                </p>
                            </div>

                            {/* key features */}
                            <div className="fade-in-later">
                                <h4 className="text-xl lg:text-2xl font-semibold mb-2">
                                    Key Features
                                </h4>

                                <ul className="flex flex-col gap-4">
                                    {project.description.features.map(
                                        (feature) => (
                                            <li
                                                key={feature.title}
                                                className="relative pl-7 text-left leading-relaxed text-sm lg:text-base"
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute left-0 top-[-1.5px] font-bold text-primary"
                                                >
                                                    →
                                                </span>
                                                <span className="text-foreground">
                                                    {feature.title}:
                                                </span>{' '}
                                                <span className="text-muted-foreground">
                                                    {feature.description}
                                                </span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            <div className="fade-in-later">
                                <h4 className="text-xl lg:text-2xl font-semibold">
                                    Tech Stack
                                </h4>

                                {isGroupedTechStack(project.techStack) ? (
                                    <div className="grid gap-5 md:grid-cols-2 mt-4 pr-1 md:pr-0">
                                        {Object.entries(project.techStack).map(
                                            ([category, stack]) => (
                                                <div
                                                    key={category}
                                                    className="rounded-2xl border p-4"
                                                >
                                                    <h4 className="font-semibold mb-4 text-sm lg:text-base">
                                                        {category}
                                                    </h4>

                                                    <div className="flex flex-wrap gap-2">
                                                        {stack.map((item) => (
                                                            <span
                                                                key={item}
                                                                className="rounded-full border px-3 py-1 text-xs lg:text-sm text-muted-foreground"
                                                            >
                                                                {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                ) : (
                                    <p className="mt-2 leading-relaxed break-words text-sm lg:text-base text-muted-foreground pr-1 md:pr-0">
                                        {project.techStack.join(' | ')}
                                    </p>
                                )}
                            </div>
                        </div>
                        <ArrowAnimation />
                    </div>
                </div>

                <div
                    id="images"
                    className="fade-in-later mx-auto max-w-2xl lg:max-w-5xl pr-1 md:pr-0"
                >
                    <div className="group relative aspect-video w-full overflow-hidden">
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="h-full w-full object-contain"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <a
                            href={project.image}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute right-5 top-5 inline-flex size-12 items-center justify-center rounded-full bg-background/80 opacity-100 backdrop-blur transition-all duration-300 hover:bg-primary hover:text-primary-foreground lg:opacity-0 lg:group-hover:opacity-100"
                        >
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
