import { base } from "../../images/imageIds";

interface Props {
    publicId: string;
    alt: string;
    width?: number;
    quality?: number;
    className?: string;
    onClick?: () => any;
}

const SmartImageCloudinary: React.FC<Props> = ({
    publicId,
    alt,
    width = 800,
    quality = 80,
    className = '',
    onClick = () => null,
}) => {
    const url = `${base}/w_${width},q_${quality},f_auto/${publicId}`;

    return (
        <img
            onClick={onClick}
            src={url}
            alt={alt}
            loading="lazy"
            className={className}
        />
    );
};

export default SmartImageCloudinary;