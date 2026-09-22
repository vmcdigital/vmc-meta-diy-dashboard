interface DataboxEmbedProps {
  src: string;
  title: string;
  height?: number;
  /**
   * Optional width-to-height ratio (e.g. 16 / 9). When set, the embed scales
   * with the page width instead of using a fixed height, which removes the
   * empty space Databox adds above and below a datawall.
   */
  aspectRatio?: number;
}

export default function DataboxEmbed({ src, title, height = 1200, aspectRatio }: DataboxEmbedProps) {
  if (aspectRatio) {
    return (
      <div
        className="databox-embed-wrapper"
        style={{ position: 'relative', width: '100%', aspectRatio: String(aspectRatio) }}
      >
        <iframe
          title={title}
          src={src}
          frameBorder="0"
          allowFullScreen
          className="databox-iframe"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      </div>
    );
  }

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
