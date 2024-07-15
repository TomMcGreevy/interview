'use client'

import ErrorBanner from "@/components/ui/Containers/ErrorBanner";

const error = ({
    error,
    reset
}: { error: Error; reset: () => void }) => {
    // Extend for different error types
    return (
        <ErrorBanner error={error} callback={reset} />
    );
}
export default error;