import React from "react";

const VideoPopup = ({ isVideoOpen, setIsVideoOpen, videoPath = "/assets/img/video/videoClinica.mp4" }) => {
  return (
    <>
      {isVideoOpen && (
        <div
          className="video-popup-overlay"
          onClick={() => setIsVideoOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <video
            src={videoPath}
            controls
            autoPlay
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
            }}
          ></video>
          <button
            onClick={() => setIsVideoOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "24px",
              color: "#FFF",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
