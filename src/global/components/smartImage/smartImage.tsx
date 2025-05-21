import { base } from "../../images/imageIds";

interface Props {
    publicId: string;
    alt: string;
    width?: number;
    quality?: number;
    className?: string;
}

const SmartImageCloudinary: React.FC<Props> = ({
    publicId,
    alt,
    width = 800,
    quality = 80,
    className = '',
}) => {
    const url = `${base}/w_${width},q_${quality},f_auto/${publicId}`;

    return (
        <img
            src={url}
            alt={alt}
            loading="lazy"
            className={className}
        />
    );
};

export default SmartImageCloudinary;