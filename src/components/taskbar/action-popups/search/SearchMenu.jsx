import clsx from 'clsx';
import SearchIcon from '../../../icons/SearchIcon';
import { useRef, useState } from 'react';

import DisplayTabView from './DisplayTabView';

const tabs = ['All', 'Apps', 'Documents', 'Web', 'More'];

const SearchMenu = () => {
    const tabPrefixRegex = new RegExp(`(${tabs.join(`|`)})(:|\\s).*`, 'i');

    const [searchIsFocused, setSearchIsFocused] = useState(false);
    const [searchBoxQuery, setSearchBoxQuery] = useState('');
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const searchBoxRef = useRef();

    const handleOnFocus = (e) => {
        setSearchIsFocused(true);
        e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length,
        );
    };

    const handleOnBlur = () => setSearchIsFocused(false);

    const handleKeyDown = () => {
        if (searchBoxRef?.current) searchBoxRef.current.focus();
    };

    document.addEventListener('keydown', handleKeyDown);

    const handleSearchBoxOnChange = (e) => {
        setSearchBoxQuery(e.target.value);

        if (tabPrefixRegex.test(searchBoxQuery)) {
            const tabsLowerCase = tabs.map((tab) => tab.toLowerCase());
            const indexOfActiveTab = tabsLowerCase.indexOf(
                searchBoxQuery.toLowerCase().slice(0, -1),
            );

            if (tabs[indexOfActiveTab]) setActiveTab(tabs[indexOfActiveTab]);
        } else {
            setActiveTab(tabs[0]);
        }
    };

    const updateSearchBoxPrefix = (tab) => {
        const switchingToAllTab = tab.toLowerCase() === 'all';

        if (!tabPrefixRegex.test(searchBoxQuery)) {
            if (switchingToAllTab) return;

            setSearchBoxQuery((prev) => `${tab.toLowerCase()}: ${prev}`);
        }

        if (tabPrefixRegex.test(searchBoxQuery)) {
            const regexSearchResult = tabPrefixRegex.exec(searchBoxQuery);
            const currentPrefix = regexSearchResult[1];

            if (switchingToAllTab) {
                return setSearchBoxQuery((prev) =>
                    prev.replace(`${currentPrefix}: `, ''),
                );
            }

            return setSearchBoxQuery((prev) =>
                prev.replace(currentPrefix, tab.toLowerCase()),
            );
        }
    };

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
        updateSearchBoxPrefix(tab);
    };

    return (
        <div className="flex flex-col h-[640px] w-[785px] text-gray-100">
            {/* Tab Navigation */}
            <div className="bg-gray-800">
                <div className="px-2">
                    {tabs.map((tab) => (
                        <button
                            type="button"
                            className={clsx(
                                'px-2 py-3 relative text-sm focus:ring-2 z-10 focus:ring-inset focus:ring-gray-100 focus:outline-none text-gray-400 cursor-default hover:text-gray-100',
                                activeTab === tab &&
                                    'border-b-2 border-blue-500',
                            )}
                            onClick={() => handleTabSwitch(tab)}
                            key={tab}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab View */}
            <div className="h-full p-5 ">
                <DisplayTabView tab={activeTab} />
            </div>

            {/* Search Box */}
            <div
                className={clsx(
                    'flex w-full items-center h-10 py-2 border-2  bg-gray-100 text-gray-800 ',
                    searchIsFocused ? ' border-blue-500' : ' border-gray-400',
                )}
            >
                <span className="flex items-center h-full px-3 text-gray-700 align-middle">
                    <SearchIcon className="w-auto h-4 " />
                </span>
                <input
                    ref={searchBoxRef}
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    value={searchBoxQuery}
                    onChange={handleSearchBoxOnChange}
                    type="text"
                    className="w-full h-auto text-gray-800 bg-gray-100 focus:outline-none"
                />
            </div>
        </div>
    );
};

export default SearchMenu;
