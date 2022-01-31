import React from 'react';

interface Props {
	alt?: string;
	src: string;
	className?: string;
}

const ImageComponent: React.FC<Props> = ({ alt, src, className = '' }) => {
	return <img className={className} alt={alt} src={src} />;
};
export default ImageComponent;
