import { FC } from 'react';
import Link, { LinkProps } from 'next/link';

export type iconType = string;

type iconLinkProps = {
    label: string;
    icon: iconType;
    className?: string;
} & LinkProps;

const IconLink: FC<iconLinkProps> = ({ label, icon, className = '', ...linkProps }) => {
    return (
        <Link {...linkProps}>
            <a className={`flex items-center hover:no-underline ${className}`}>
                <img src={icon} alt={label} className="md:hidden h-12 w-auto" />
                <p className="text-primary hover:text-secondary transition-colors duration-150 ease-linear mr-3 md:m-0 cursor-pointer">
                    {label}
                </p>
            </a>
        </Link>
    );
};
export default IconLink;
