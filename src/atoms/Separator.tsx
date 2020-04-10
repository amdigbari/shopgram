import { FC } from 'react';

export type separatorColors = 'primary' | 'primary-light' | 'gray';

type separatorProps = {
    vertical?: boolean;
    className?: string;
    color?: separatorColors;
};

const Separator: FC<separatorProps> = ({ vertical = false, className = '', color = 'gray' }) => {
    return <div className={`border-${color} ${vertical ? 'border-b w-full h-0 my-3' : 'border-l w-0 h-full mx-3'} ${className}`} />;
};
export default Separator;
