"use client";

import { useEffect, useRef, useState } from "react";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";

type VideoModalProps = {
  src: string;
  startTime?: number;
  onClose: (currentTime: number) => void;
};

export function VideoModal({ src, startTime = 0, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = startTime;
    video.play();
    const onTimeUpdate = () => setProgress((video.currentTime / video.duration) * 100 || 0);
    const onMetadata = () => {
      if (video.videoWidth && video.videoHeight) {
        setAspectRatio(video.videoWidth / video.videoHeight);
      }
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onMetadata);
    if (video.readyState >= 1) onMetadata();
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onMetadata);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => {
    setVisible(false);
    const video = videoRef.current;
    video?.pause();
    setTimeout(() => onClose(video?.currentTime ?? 0), 250);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar) return;
    const rect = bar.getBoundingClientRect();
    video.currentTime = ((e.clientX - rect.left) / rect.width) * video.duration;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-100 ease-out"
      style={{ background: "rgba(0,0,0,0.8)", opacity: visible ? 1 : 0 }}
      onClick={handleClose}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-5 right-5 w-10 h-10 bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
      >
        <X size={18} className="text-white" />
      </button>

      {/* Video container */}
      <div
        className="relative mx-8 rounded-2xl overflow-hidden"
        style={
          aspectRatio
            ? { width: `min(90vw, min(90vh * ${aspectRatio}, 900px))` }
            : { width: "min(90vw, 900px)" }
        }
        onClick={(e) => e.stopPropagation()}
      >
        <video ref={videoRef} src={src} className="w-full h-auto block" playsInline loop />

        {/* Controls overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-10 bg-gradient-to-t from-black/60 to-transparent">
          {/* Progress bar */}
          <div
            ref={progressRef}
            onClick={seek}
            className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-4"
          >
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%`, transition: "width 0.25s linear" }}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              {playing ? (
                <Pause size={15} className="text-white" />
              ) : (
                <Play size={15} className="text-white ml-0.5" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              {muted ? (
                <VolumeX size={15} className="text-white" />
              ) : (
                <Volume2 size={15} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
