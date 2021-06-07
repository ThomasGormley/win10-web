import { match } from '../../../../util/match';
import AllTab from './AllTab';
import AppsTab from './AppsTab';
import { FileIcon, WebIcon } from '../../../icons';
import EmptyTab from './EmptyTab';

const DisplayTabView = ({ tab }) =>
    match(tab, {
        All() {
            return <AllTab />;
        },
        Apps() {
            return <AppsTab />;
        },
        Documents() {
            return (
                <EmptyTab
                    text="Start typing to search for documents"
                    icon={<FileIcon />}
                />
            );
        },
        Web() {
            return (
                <EmptyTab
                    text="Start typing to search the web"
                    icon={<WebIcon />}
                />
            );
        },
        More() {
            return <h1 className="text-sm ">{tab}</h1>;
        },
    });

export default DisplayTabView;
