import { AuthStateInterface } from '../../auth/types/auth-interfaces';
import { FeedStateInterface } from '../modules/feed/types/feed-state.interface';

export interface AppStateInterface {
    auth: AuthStateInterface;
    feed: FeedStateInterface;
}
