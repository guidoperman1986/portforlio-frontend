import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { firstValueFrom } from "rxjs";
import { Activity } from "../interfaces/skills.interface";
import { ActivityService } from "../services/activity.service";


type ActivityState = {
    activities: Activity[];
    isLoading: boolean;
}

const initialState: ActivityState = {
    activities: [],
    isLoading: false
}

export const activityStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, activityService = inject(ActivityService)) => ({
        async loadActivities() {
            patchState(store, { isLoading: true });
            const activities: Activity[] = await firstValueFrom(activityService.getActivities());

            patchState(store, { activities, isLoading: false });
        },
        getValue() {
            return { activities: store.activities, isLoading: store.isLoading };
        }
    }))
)