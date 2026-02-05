interface BlogImagesProps {
    images: string[];
    altPrefix?: string;
}

export default function BlogImages({ images, altPrefix = 'Blog image' }: BlogImagesProps) {
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="space-y-6 my-8">
            {images.map((imageUrl, index) => (
                <div
                    key={index}
                    className="w-full overflow-hidden border border-black"
                >
                    <img
                        src={imageUrl}
                        alt={`${altPrefix} ${index + 1}`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}
