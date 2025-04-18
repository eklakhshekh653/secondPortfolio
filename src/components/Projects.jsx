import React, { useState } from "react";
import project from "./data/projects.json";

const Projects = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const openVideo = (url) => {
    setVideoUrl(url);
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {project.map((data) => (
            <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
              <div
                className="card bg-dark text-light"
                style={{
                  width: "18rem",
                  border: "1px solid yellow",
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="img d-flex justify-content-center align-content-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "250px",
                      height: "200px",
                      border: "2px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={() => openVideo(data.demo)}
                  >
                    Demo
                  </button>
                  <a href={data.source} className="btn btn-warning">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {videoUrl && (
        <div
          className="fullscreen-video"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <button
            onClick={closeVideo}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "red",
              color: "white",
              border: "none",
              padding: "10px 15px",
              cursor: "pointer",
              fontSize: "20px",
              borderRadius: "5px",
            }}
          >
            ✖
          </button>
          <iframe
            src={videoUrl}
            title="Project Demo"
            style={{ width: "80%", height: "80%" }}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Projects;
