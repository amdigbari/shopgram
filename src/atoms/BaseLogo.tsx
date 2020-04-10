import { FC } from 'react';
import Link from 'next/link';

import { baseRoute } from 'apis/routes';

type baseLogoProps = {};

const BaseLogoName: FC<baseLogoProps> = () => {
    return (
        <Link href={baseRoute}>
            <a>
                <img className="h-10 w-auto" src="/images/base/logo_name.png" alt="base logo" />
            </a>
        </Link>
    );
};
export default BaseLogoName;
