import { FC } from 'react';

import IconLink from 'atoms/IconLink';
import Separator from 'atoms/Separator';
import BaseLogoName from 'atoms/BaseLogo';
import { shopsRoute, addStoreRoute, aboutUsRoute } from 'apis/routes';

type navLinksProps = {};

const NavLinks: FC<navLinksProps> = () => {
    return (
        <div className="w-full flex flex-col items-center md:flex-row">
            <div className="flex-1 flex items-center justify-start h-6">
                <IconLink className="text-sm" label="ورود / ثبت‌نام" icon="/images/navbar/user.svg" href="/" />
                <Separator color="primary" />
                <IconLink className="text-sm" label="فروشگاه‌ها" icon="/images/navbar/shops.svg" href={shopsRoute} />
            </div>

            <BaseLogoName />

            <div className="flex-1 flex items-center justify-end h-6">
                <IconLink className="text-sm" label="بلاگ" icon="/images/navbar/blog.svg" href="/blog/" />
                <Separator color="primary" />
                <IconLink className="text-sm" label="فروشنده‌شوید" icon="/images/navbar/add_store.svg" href={addStoreRoute} />
                <Separator color="primary" />
                <IconLink className="text-sm" label="درباره‌ما" icon="/images/navbar/about_us.svg" href={aboutUsRoute} />
            </div>
        </div>
    );
};
export default NavLinks;
