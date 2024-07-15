'use client'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const error = ({
    error,
    reset
}: { error: Error; reset: () => void }) => {
    // Extend for different error types
    return (
        <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                {error.message}
            </AlertDescription>
        </Alert>
    );
}
export default error;