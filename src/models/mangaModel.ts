class Chapter {
    title: string;
    description: string;
    pages: Page[];

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
        this.pages = [];
    }

    addPage(page: Page) {
        this.pages.push(page);
    }
}

class Page {
    content: string;
    panels: Panel[];

    constructor(content: string) {
        this.content = content;
        this.panels = [];
    }

    addPanel(panel: Panel) {
        this.panels.push(panel);
    }
}

class Panel {
    content: string;
    image: string;

    constructor(content: string, image: string) {
        this.content = content;
        this.image = image;
    }
}

export { Chapter, Page, Panel };