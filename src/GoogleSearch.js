import * as React from 'react';
import './App.css';

import Stack from '@mui/material/Stack';

export default function GoogleSearch() {

    const SearchQuery = (e) => {

        var newPageUrl = "https://www.google.com/search?q=" + e

        window.open(newPageUrl, "_blank")

    }

    return (
        <Stack className='border ml-7' direction='row' justifyContent='end'>

            <div class="container flex">
                <div class="flex border-2 rounded">
                    <button class="flex items-center justify-center px-4 border-r">
                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                            </path>
                        </svg>
                    </button>
                    <input
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                SearchQuery(document.getElementById('Google').value)
                            }
                        }} id="Google"
                        placeholder="Search something..."
                        name="Google" type="text" class="px-4 py-2 w-80" />
                </div>
            </div>
        </Stack>
    );

}