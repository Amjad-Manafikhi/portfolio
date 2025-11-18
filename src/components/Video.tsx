

export default function Video() {
  return (
    <div className="relative w-full">
        <video 
            className="border-y-20 border-x-9 rounded-xl border-neutral-900 mx-auto mt-5 lg:mt-15" 
            muted
            autoPlay 
            loop 
            controls
            preload="none"
        >
        <source src="/kanbanTable.mp4" type="video/mp4" />
        <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
        />
        Your browser does not support the video tag.
        </video>
    </div>
  )
}