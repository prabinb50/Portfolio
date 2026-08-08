'use client';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import { getTechStackPreview } from '@/lib/techStack';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

export default function Project({
    index,
    project,
    selectedProject,
    onMouseEnter,
}: Props) {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector(
            '#arrow-line',
        ) as SVGPathElement;

        const arrowCurb = externalLinkSVGRef.current?.querySelector(
            '#arrow-curb',
        ) as SVGPathElement;

        const box = externalLinkSVGRef.current?.querySelector(
            '#box',
        ) as SVGPathElement;

        gsap.set(box, {
            opacity: 0,
            strokeDasharray: box.getTotalLength(),
            strokeDashoffset: box.getTotalLength(),
        });

        gsap.set(arrowLine, {
            opacity: 0,
            strokeDasharray: arrowLine.getTotalLength(),
            strokeDashoffset: arrowLine.getTotalLength(),
        });

        gsap.set(arrowCurb, {
            opacity: 0,
            strokeDasharray: arrowCurb.getTotalLength(),
            strokeDashoffset: arrowCurb.getTotalLength(),
        });

        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
        });

        tl.to(externalLinkSVGRef.current, {
            autoAlpha: 1,
        })
            .to(box, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                arrowLine,
                {
                    opacity: 1,
                    strokeDashoffset: 0,
                },
                '<0.2',
            )
            .to(arrowCurb, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                externalLinkSVGRef.current,
                {
                    autoAlpha: 0,
                },
                '+=1',
            );
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    const techStackPreview =
        project.listTechStack ?? getTechStackPreview(project.techStack, 4);

    const description =
        project.shortDescription ??
        project.description.overview.substring(0, 165) + '...';

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="project-item group relative block border-b border-white/10 py-8 transition-all md:py-10 first:pt-0 last:border-none last:pb-0 md:group-hover/projects:opacity-40 md:hover:!opacity-100"
        >
            {selectedProject === null && (
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="mb-7 w-full object-contain object-top px-1 md:px-0"
                />
            )}

            <div className="flex gap-4 md:gap-6">
                <div className="mt-1 shrink-0 font-anton text-muted-foreground">
                    _{(index + 1).toString().padStart(2, '0')}.
                </div>

                <div className="flex-1 space-y-4">
                    <div className="flex items-start gap-3">
                        <h3 className="font-anton text-3xl md:text-4xl lg:text-5xl leading-none transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left">
                            {project.title}
                        </h3>

                        <span
                            role="link"
                            tabIndex={0}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                if (project.liveUrl) {
                                    window.open(
                                        project.liveUrl,
                                        '_blank',
                                        'noopener,noreferrer',
                                    );
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    if (project.liveUrl) {
                                        window.open(
                                            project.liveUrl,
                                            '_blank',
                                            'noopener,noreferrer',
                                        );
                                    }
                                }
                            }}
                            className="mt-[-4px] lg:mt-0 flex cursor-pointer opacity-100 transition-opacity duration-300 lg:opacity-0 lg:group-hover:opacity-100"
                            aria-label={`Visit ${project.title} live website`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                ref={externalLinkSVGRef}
                            >
                                <path
                                    id="box"
                                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                />
                                <path id="arrow-line" d="M10 14 21 3" />
                                <path id="arrow-curb" d="M15 3h6v6" />
                            </svg>
                        </span>
                    </div>

                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>

                    <p className="text-xs text-muted-foreground">
                        {techStackPreview.join(' | ')}
                    </p>
                </div>
            </div>
        </TransitionLink>
    );
}
