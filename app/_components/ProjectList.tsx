'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { MouseEvent, useRef, useState } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProjectList() {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current || !imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current.getBoundingClientRect();

                const imageRect =
                    imageContainer.current.getBoundingClientRect();

                const offsetTop = e.clientY - containerRect.y;

                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        opacity: 0,
                        duration: 0.3,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        {
            scope: containerRef,
            dependencies: [containerRef.current],
        },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        {
            scope: containerRef,
        },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }
        setSelectedProject(slug);
    };

    return (
        <section id="selected-projects" className="section-spacing">
            <div className="container">
                <SectionTitle title="Selected Projects" />

                <div ref={containerRef} className="group/projects relative">
                    {selectedProject && (
                        <div
                            ref={imageContainer}
                            className="pointer-events-none absolute right-0 top-0 z-10 hidden aspect-[3/4] w-[300px] lg:block lg:w-[400px] overflow-hidden opacity-0"
                        >
                            {PROJECTS.map((project) => (
                                <Image
                                    key={project.slug}
                                    ref={imageRef}
                                    src={project.thumbnail}
                                    alt={project.title}
                                    width={500}
                                    height={700}
                                    className={cn(
                                        'absolute inset-0 h-full w-full object-contain transition-all duration-500',
                                        {
                                            'opacity-0':
                                                project.slug !==
                                                selectedProject,
                                        },
                                    )}
                                />
                            ))}
                        </div>
                    )}

                    <div
                        ref={projectListRef}
                        className="flex flex-col gap-2 md:gap-0"
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                key={project.slug}
                                index={index}
                                project={project}
                                selectedProject={selectedProject}
                                onMouseEnter={handleMouseEnter}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
