'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="p-8">
            <h2 className="text-red-600 text-2xl">Something went wrong!</h2>
            <button
                onClick={() => reset()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Try again
            </button>
        </div>
    );
}