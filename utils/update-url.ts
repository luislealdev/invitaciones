import { ReadonlyURLSearchParams } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface UpdateURLParams {
    router: AppRouterInstance;
    pathname: string;
    searchParams: ReadonlyURLSearchParams;
    newParams: {
        page?: number;
        take?: number;
        search?: string;
        startDate?: string;
        endDate?: string;
        status?: string;
        receiverId?: number | string;
        month?: number | string;
        year?: number | string;
    };
    defaultTake?: number;
}

export const updateURL = ({
    router,
    pathname,
    searchParams,
    newParams,
    defaultTake = 20,
}: UpdateURLParams) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newParams.page !== undefined) {
        if (newParams.page > 1) {
            params.set('page', newParams.page.toString());
        } else {
            params.delete('page');
        }
    }

    if (newParams.take !== undefined) {
        if (newParams.take !== defaultTake) {
            params.set('take', newParams.take.toString());
        } else {
            params.delete('take');
        }
    }

    if (newParams.search !== undefined) {
        const normalizedSearch = newParams.search.trim();
        if (normalizedSearch) {
            params.set('search', normalizedSearch);
            params.delete('page');
        } else {
            params.delete('search');
        }
    }

    if (newParams.startDate !== undefined) {
        if (newParams.startDate) {
            params.set('startDate', newParams.startDate);
        } else {
            params.delete('startDate');
        }
    }

    if (newParams.endDate !== undefined) {
        if (newParams.endDate) {
            params.set('endDate', newParams.endDate);
        } else {
            params.delete('endDate');
        }
    }

    if (newParams.status !== undefined) {
        if (newParams.status) {
            params.set('status', newParams.status);
        } else {
            params.delete('status');
        }
    }

    if (newParams.receiverId !== undefined) {
        if (newParams.receiverId) {
            params.set('receiverId', newParams.receiverId.toString());
        } else {
            params.delete('receiverId');
        }
    }

    if (newParams.month !== undefined) {
        if (newParams.month && newParams.month !== 'all') {
            params.set('month', newParams.month.toString());
        } else {
            params.delete('month');
        }
    }

    if (newParams.year !== undefined) {
        if (newParams.year) {
            params.set('year', newParams.year.toString());
        } else {
            params.delete('year');
        }
    }

    const newURL = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newURL);
};