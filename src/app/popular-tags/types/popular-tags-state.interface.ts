import { PopularTagsInterface } from './popular-tags.interface';

export interface PopularTagsStateInterface {
    isLoading: boolean;
    error: string | null;
    data: PopularTagsInterface | null;
}
