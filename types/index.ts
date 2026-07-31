export type Next_Page_Url = string;

export type Variant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'no-color';

export type TechStack = string[] | Record<string, string[]>;

export interface IProjectFeature {
    title: string;
    description: string;
}

export interface IProjectDescription {
    overview: string;
    features: IProjectFeature[];
}

export interface IProject {
    title: string;
    description: IProjectDescription;
    techStack: TechStack;
    listTechStack?: string[];
    thumbnail: string;
    image: string;
    slug: string;
    liveUrl?: string;
    sourceCode?: string;
    category: string;
    shortDescription: string;
}
