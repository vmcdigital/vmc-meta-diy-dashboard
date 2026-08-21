interface DataboxEmbedProps {
  src: string;
  title: string;
  height?: number;
}

export default function DataboxEmbed({ src, title, height = 1200 }: DataboxEmbedProps) {
  return (
    <div className="databox-embed-wrapper">
      <iframe
        title={title}
        src={src}
        frameBorder="0"
        width="100%"
        height={height}
        allowFullScreen
        className="databox-iframe"
      />
    </div>
  );
}
