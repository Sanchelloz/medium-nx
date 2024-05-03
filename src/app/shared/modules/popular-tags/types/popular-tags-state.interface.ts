import { GetPopularTagsResponseInterface } from './get-popular-tags-response.interface';

export interface PopularTagsStateInterface {
    isLoading: boolean;
    error: string | null;
    data: GetPopularTagsResponseInterface | null;
}
