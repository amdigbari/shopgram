import { FC } from 'react';

import NavLinks from 'organisms/DesktopNavLinks';

type headerProps = {};

const Header: FC<headerProps> = () => {
    return (
        <div className="w-full px-6 py-4 bg-tertiary">
            <NavLinks />
        </div>
    );
};

export default Header;
