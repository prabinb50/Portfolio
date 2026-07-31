import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from './_components/ProjectDetails';

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const project = PROJECTS.find((item) => item.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | Prabin Joshi',
        };
    }

    return {
        title: `${project.title} | Prabin Joshi`,
        description: project.description.overview,
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = PROJECTS.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
}
