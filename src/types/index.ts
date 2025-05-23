export interface Manga {
    title: string;
    description: string;
    chapters: Chapter[];
}

export interface Chapter {
    title: string;
    description: string;
    pages: Page[];
}

export interface Page {
    content: string;
    panels: Panel[];
}

export interface Panel {
    content: string;
    image: string;
}