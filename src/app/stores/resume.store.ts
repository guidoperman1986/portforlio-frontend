import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { firstValueFrom } from "rxjs";
import { Education, Experience, PercentageItem, Resume, ResumeState } from "../interfaces/resume.interface";
import { ResumeService } from "../services/resume.service";

const initialState: ResumeState = {
    resume: {
        data: null,
        isLoading: false,
        error: null
    },
    education: {
        data: null,
        isLoading: false,
        error: null
    },
    experience: {
        data: null,
        isLoading: false,
        error: null
    },
    language: {
        data: null,
        isLoading: false,
        error: null
    },
    skill: {
        data: null,
        isLoading: false,
        error: null
    }
}

export const resumeStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, resumeService = inject(ResumeService)) => ({
        async loadResume() {
            patchState(store, { resume: { data: null, isLoading: true, error: null } });
            const resume: Resume = await firstValueFrom(resumeService.getResume());

            patchState(store, { resume: { data: resume, isLoading: false, error: null } });
        },
        async loadEducation() {
            patchState(store, { education: { data: null, isLoading: true, error: null } });
            const education: Education = await firstValueFrom(resumeService.getEducation());

            patchState(store, { education: { data: education, isLoading: false, error: null } });
        },
        async loadExperience() {
            patchState(store, { experience: { data: null, isLoading: true, error: null } });
            const experience: Experience = await firstValueFrom(resumeService.getExperience());

            patchState(store, { experience: { data: experience, isLoading: false, error: null } });
        },
        async loadLanguage() {
            patchState(store, { language: { data: null, isLoading: true, error: null } });
            const language: PercentageItem[] = await firstValueFrom(resumeService.getLanguage());

            patchState(store, { language: { data: language, isLoading: false, error: null } });
        },
        async loadSkill() {
            patchState(store, { skill: { data: null, isLoading: true, error: null } });
            const skill: PercentageItem[] = await firstValueFrom(resumeService.getSkill());

            patchState(store, { skill: { data: skill, isLoading: false, error: null } });
        },

        getValue() {
            return { resume: store.resume.data, isLoading: store.resume.isLoading, error: store.resume.error };
        },
        getEducation() {
            return { education: store.education.data, isLoading: store.education.isLoading, error: store.education.error };
        },
        getExperience() {
            return { experience: store.experience.data, isLoading: store.experience.isLoading, error: store.experience.error };
        },
        getLanguages() {
            return { language: store.language.data, isLoading: store.language.isLoading, error: store.language.error };
        },
        getSkills() {
            return { skill: store.skill.data, isLoading: store.skill.isLoading, error: store.skill.error };
        },
    }))
)
