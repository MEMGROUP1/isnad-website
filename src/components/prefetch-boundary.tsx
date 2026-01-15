import { dehydrate, HydrationBoundary, QueryClient, QueryKey } from "@tanstack/react-query";
import { ReactNode } from "react";

interface QueryConfig<T> {
    queryKey: QueryKey;
    queryFn: () => Promise<T>;
}

interface Props<T = unknown> {
    children: ReactNode;
    queries: QueryConfig<T>[];
}

export default async function PrefetchBoundary<T>({ children, queries }: Props<T>) {
    const queryClient = new QueryClient();

    const queriesArr = queries.map(({ queryKey, queryFn }) =>
        queryClient.prefetchQuery({
            queryKey,
            queryFn,
        })
    );

    await Promise.all(queriesArr);

    return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
