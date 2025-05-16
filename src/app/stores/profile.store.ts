import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Profile } from "../interfaces/profile.interface";
import { inject } from "@angular/core";
import { PortfolioService } from "../services/portfolio.service";
import { firstValueFrom } from "rxjs";

type ProfileState = {
    profile: Profile;
    isLoading: boolean;
}

const initialState: ProfileState = {
    profile: {
        name: "",
        specialty: "",
        phone: "",
        email: "",
        birthDay: "",
        location: ""
    },
    isLoading: false
}

export const profileStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, portfolioService = inject(PortfolioService)) => ({
        async loadProfile() {
            patchState(store, { isLoading: true });
            const profile: Profile = await firstValueFrom(portfolioService.getProfile());

            patchState(store, { profile, isLoading: false });
        },
        getValue() {
            return { profile: store.profile, isLoading: store.isLoading };
        }

    }))
) 