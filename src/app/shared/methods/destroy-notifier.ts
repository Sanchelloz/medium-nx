import { Subject } from 'rxjs';
import { DestroyRef, inject } from '@angular/core';

export function destroyNotifier(): Subject<void> {
    const destroy$ = new Subject<void>();

    inject(DestroyRef).onDestroy(() => {
        this.destroy$.next(true);
        this.destroy$.complete();
        console.log('comp destroyed');
    });

    return destroy$;
}
