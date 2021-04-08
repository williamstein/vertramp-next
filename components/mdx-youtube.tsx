export default function Video({ src }: { src: string }) {
  const props = {
    src,
    frameBorder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    width: "355px",
    height: "200px",
    maxWidth: "100%",
  };
  return (
    <div style={{ margin: "15px 0", textAlign: "center" }}>
      <iframe {...props} />
    </div>
  );
}
