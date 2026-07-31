import { TechStack } from '@/types';

export const getTechStackPreview = (
    techStack: TechStack,
    limit?: number,
): string[] => {
    const stacks = Array.isArray(techStack)
        ? techStack
        : Object.values(techStack).flat();

    return limit ? stacks.slice(0, limit) : stacks;
};

export const isGroupedTechStack = (
    techStack: TechStack,
): techStack is Record<string, string[]> => {
    return !Array.isArray(techStack);
};
