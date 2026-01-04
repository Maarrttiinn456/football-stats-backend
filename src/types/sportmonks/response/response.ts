export interface SportMonksResponse<T> {
    data: T;

    pagination?: Pagination;
    subscription?: Subscription[];
    rate_limit?: RateLimit;
    timezone?: string;
}

export interface Pagination {
    count: number;
    per_page: number;
    current_page: number;
    next_page?: string;
    has_more: boolean;
}

export interface Subscription {
    meta: SubscriptionMeta;
    plans: SubscriptionPlan[];
    add_ons: unknown[];
    widgets: unknown[];
}

export interface SubscriptionMeta {
    trial_ends_at: string;
    ends_at: string;
    current_timestamp: number;
}

export interface SubscriptionPlan {
    plan: string;
    sport: string;
    category: string;
}

export interface RateLimit {
    resets_in_seconds: number;
    remaining: number;
    requested_entity: string;
}
