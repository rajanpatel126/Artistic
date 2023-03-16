import React, { useState } from "react";
import { combineImage } from "../src/api/user";

function App() {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [mergedImage, setMergedImage] = useState(null);

  const handleImage1 = (event) => {
    setImage1(URL.createObjectURL(event.target.files[0]));
  };

  const handleImage2 = (event) => {
    setImage2(URL.createObjectURL(event.target.files[0]));
  };

  const mergeImages = () => {
    const data = combineImage({ img1: image1, img2: image2 });
    setMergedImage(data.combineImg);
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "merged-image.jpg";
    link.href = mergedImage;
    link.click();
  };

  return (
    <div className="App">
      <input type="file" onChange={handleImage1} id="img-1" />
      <input type="file" onChange={handleImage2} id="img-2" />
      <br />
      <button onClick={mergeImages}>Merge</button>
      <button onclick={downloadImage} disabled={!mergedImage}>
        Download
      </button>
      {mergedImage && (
        <img
          src={mergedImage}
          style={{ width: "50%", height: "50%" }}
          alt="Merged"
        />
      )}
    </div>
  );
}

export default App;
