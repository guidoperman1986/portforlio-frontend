import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { firstValueFrom } from "rxjs";
import { ResumeService } from "../services/resume.service";

interface Resume {
    content: string;
}

type ResumeState = {
    resume: Resume;
    isLoading: boolean;
}

const initialState: ResumeState = {
    resume: {
        content: ""
    },
    isLoading: false
}

export const resumeStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, resumeService = inject(ResumeService)) => ({
        async loadResume() {
            patchState(store, { isLoading: true });
            const resume: Resume = await firstValueFrom(resumeService.getResume());

            patchState(store, { resume, isLoading: false });
        },
        getValue() {
            return { resume: store.resume, isLoading: store.isLoading };
        }
    }))
)
