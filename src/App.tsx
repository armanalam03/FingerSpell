import { useEffect, useRef, useState } from "react";
import "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import { drawHand } from "./utilities";
import * as fp from "fingerpose";
import toast, { Toaster } from 'react-hot-toast';

import {
  aSign,
  bSign,
  cSign,
  dSign,
  eSign,
  fSign,
  gSign,
  hSign,
  iSign,
  jSign,
  kSign,
  lSign,
  mSign,
  nSign,
  oSign,
  pSign,
  qSign,
  rSign,
  sSign,
  tSign,
  uSign,
  vSign,
  wSign,
  xSign,
  ySign,
  zSign,
} from "./gestures";

import githubIcon from "./assets/icons/github.png";
import linkedinIcon from "./assets/icons/linkedin.png";

function App() {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState("");
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    toast(
      "Welcome to FingerSpell. Learning and practice American Sign Language in real-time.\n\nKindly show your hand to the webcam where it is clearly visible.",
      {
        duration: 7000,
        style: {
          borderRadius: '10px',
          background: '#171717',
          color: '#fff',
          boxShadow: '0 0 15px -3px #000000',
        }
      }
    );
  }, []);

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net: handpose.HandPose) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Get the canvas display size
      if (canvasRef.current) {
        const displayWidth = canvasRef.current.clientWidth;
        const displayHeight = canvasRef.current.clientHeight;
        
        // Set canvas internal resolution to match display size
        canvasRef.current.width = displayWidth;
        canvasRef.current.height = displayHeight;
        
        // Calculate scale factors to map video coordinates to canvas
        // Using cover behavior: scale to fill, may crop
        const videoAspect = videoWidth / videoHeight;
        const displayAspect = displayWidth / displayHeight;
        
        let scaleX, scaleY, offsetX = 0, offsetY = 0;
        
        if (displayAspect > videoAspect) {
          // Display is wider - scale by width, crop height
          scaleX = displayWidth / videoWidth;
          scaleY = scaleX;
          offsetY = (displayHeight - videoHeight * scaleY) / 2;
        } else {
          // Display is taller - scale by height, crop width
          scaleY = displayHeight / videoHeight;
          scaleX = scaleY;
          offsetX = (displayWidth - videoWidth * scaleX) / 2;
        }

        // Make Detections
        const hand = await net.estimateHands(video);

        //Gesture Detection
        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([
            aSign,
            bSign,
            cSign,
            dSign,
            eSign,
            fSign,
            gSign,
            hSign,
            iSign,
            jSign,
            kSign,
            lSign,
            mSign,
            nSign,
            oSign,
            pSign,
            qSign,
            rSign,
            sSign,
            tSign,
            uSign,
            vSign,
            wSign,
            xSign,
            ySign,
            zSign,
          ]);

          const gesture = await GE.estimate(hand[0].landmarks, 8);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            if (gesture.gestures[0].name !== "") {
              setText(gesture.gestures[0].name);
            } else {
              setText("");
            }
          }
        }

        // Draw mesh with scaling
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.save();
          ctx.translate(offsetX, offsetY);
          ctx.scale(scaleX, scaleY);
          drawHand(hand, ctx);
          ctx.restore();
        }
      }
    }
  };

  // Run handpose on component mount - mimicking the original behavior
  runHandpose();

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  useEffect(() => {
    const images = document.querySelectorAll(".sign-img");
    images.forEach(img => {
      if (text === (img as HTMLImageElement).dataset.letter) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  }, [text]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Toaster />
      <div className="window_sizes" id="window_sizes">
        <span className="window_size">Window Size: {windowSize.width} x {windowSize.height}</span>
      </div>
      <Webcam
        ref={webcamRef}
        mirrored={false}
        screenshotQuality={1}
        className="webcam"
        id="webcam"
      />

      <canvas
        ref={canvasRef}
        className="canvas"
        id="canvas"
      />
      <div className="textContainer">
        <div className="navbar">
          <span className="nav-text">FingerSpell</span>
        </div>
        <div className="signs-container">
          {
            letters.map((letter) => {
              return (
                <div className="sign-tile" key={letter}>
                  <img src={`/images/right/${letter}.png`} data-letter={letter} className="sign-img" alt={letter} />
                </div>
              );
            })
          }
        </div>
        <div className="show-text-container">
          <span className="text">{text}</span>
        </div>
      </div>
      <div className="developer-elements">
        <span className="credit"><em>created by: <b> Sourabh Singhroha</b> | </em></span>
        <span className="developer-name"></span>
        <div className="icon-container">
          <a href="https://github.com/SourabhSinghroha/Fingerspell"><img src={githubIcon} className="icon" alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/sourabh-singhroha-b806b31b9"><img src={linkedinIcon} className="icon" alt="LinkedIn" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
