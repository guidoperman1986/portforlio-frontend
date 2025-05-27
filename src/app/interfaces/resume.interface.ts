export interface TimelineItem {
    id: string;
    name: string;
    start: number;
    content: string;
    end?: number;
}

export interface Resume {
    content: string;
}

export type Education = TimelineItem[];
export type Experience = TimelineItem[];

export interface ResumeState {
    resume: {
        data: Resume | null;
        isLoading: boolean;
        error: string | null;
    }
    education: {
        data: Education | null;
        isLoading: boolean;
        error: string | null;
    }
    experience: {
        data: Experience | null;
        isLoading: boolean;
        error: string | null;
    }
}
