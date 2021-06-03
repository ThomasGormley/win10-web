export const taskbarConfig = {
    actions: {
        start: {
            tooltip: 'Start',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 257"
                    className="w-auto h-9 py-2.5 px-4"
                    color="currentColor"
                    fill="currentColor"
                >
                    <path d="M0 36.357L104.62 22.11l.045 100.914-104.57.595L0 36.358zm104.57 98.293l.08 101.002L.081 221.275l-.006-87.302 104.494.677zm12.682-114.405L255.968 0v121.74l-138.716 1.1V20.246zM256 135.6l-.033 121.191-138.716-19.578-.194-101.84L256 135.6z"></path>
                </svg>
            ),
        },
        search: {
            tooltip: 'Type here to search',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 65 65"
                    className="w-auto h-9 py-2.5 px-4"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                        d="M1.49 62.45L27.81 36.13"
                    ></path>
                    <circle
                        cx="42.22"
                        cy="21.85"
                        r="20.3"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="5"
                    ></circle>
                </svg>
            ),
        },
    },
    programs: [
        {
            id: 'explorer',
            tooltip: 'File Explorer',
        },
        {
            id: 'chrome',
            tooltip: 'Google Chrome',
        },
        {
            id: 'spotify',
            tooltip: 'Google Chrome',
        },
    ],
    tray: {
        'show-hidden': 'show',
        network: 'network',
    },
};
