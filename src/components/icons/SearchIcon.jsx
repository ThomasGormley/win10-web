const SearchIcon = ({ className = 'w-auto h-9 py-2.5 px-4' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65 65"
        className={className}
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
);

export default SearchIcon;
