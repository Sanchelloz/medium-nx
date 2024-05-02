import { ProfileInterface } from './profile.interface';

export interface ArticleInterface {
    author: ProfileInterface;
    bio: string | null;
    followersCount: number;
    following: boolean;
    image: null;
    username: string;
    body: string;
    createdAt: string;
    description: string;
    favorited: boolean;
    favoritesCount: number;
    slug: string;
    tagList: string[];
    title: string;
    updatedAt: string;
}
