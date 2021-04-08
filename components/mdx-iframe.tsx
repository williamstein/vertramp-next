export default function YouTube({ src }: { src: string }) {
  const props = {
    src,
    frameBorder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
  };
  return <iframe {...props} />;
}
