'use client'
import React from 'react';
import Mydashboard from '../[component]/Mydashboard/Mydashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-quill/dist/quill.snow.css';
const page = () => {
    const queryClient = new QueryClient();
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Mydashboard />
            </QueryClientProvider>

        </div>
    );
};

export default page;