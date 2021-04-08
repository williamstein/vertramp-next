/*
This makes it easy to embed a video from youtube or vimeo,
but NOT have to specify the size explicitly, and instead
have the video expand or shrink to the parent with
aspect ratio preserved (though of course I hard coded it).

Trick comes from here:
https://faq.dailymotion.com/hc/en-us/articles/360022841393-How-to-preserve-the-player-aspect-ratio-on-a-responsive-page

*/

export default function Video({ src }: { src: string }) {
  const props = {
    src,
    frameBorder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    width: "100%",
    height: "100%",
    style: {
      width: "100%",
      height: "100%",
      position: "absolute",
      left: "0px",
      top: "0px",
    },
  };
  return (
    <div style={{ margin: "15px 0" }}>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          width: "90%",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <iframe {...props} />
      </div>
    </div>
  );
}
