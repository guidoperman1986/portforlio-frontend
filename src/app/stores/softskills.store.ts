import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { firstValueFrom } from "rxjs";
import { SoftSkill } from "../interfaces/skills.interface";
import { SkillsService } from "../services/skills.service";

type SoftSkillsState = {
    softSkills: SoftSkill[];
    isLoading: boolean;
}

const initialState: SoftSkillsState = {
    softSkills: [],
    isLoading: false
}

export const softSkillsStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, skillsService = inject(SkillsService)) => ({
        async loadSoftSkills() {
            patchState(store, { isLoading: true });
            const softSkills: SoftSkill[] = await firstValueFrom(skillsService.getSoftSkills());

            patchState(store, { softSkills, isLoading: false });
        },
        getValue() {
            return { softSkills: store.softSkills, isLoading: store.isLoading };
        }
    }))
)