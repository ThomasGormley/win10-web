import React from 'react';

function FileIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className={className}
            color="currentColor"
            fill="currentColor"
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M56 62L8 62 8 2 39.88 2 56 18 56 62z"
            ></path>
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="4"
                d="M56 18L40 18 40 2"
            ></path>
        </svg>
    );
}

export default FileIcon;
