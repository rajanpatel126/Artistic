import React, { useState } from "react";

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
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img1 = new Image();
    img1.src = image1;

    const img2 = new Image();
    img2.src = image2;

    let image_1 = document.getElementById("img-1");
    let rect1 = image_1.getBoundingClientRect();
    let iw1 = rect1.width;
    let ih1 = rect1.height;
    // // let width = image_1.clientWidth;
    // let cy = rect1.height + rect1.height * 0.5;
    // let img_1 = document.getElementById("img-1"),
    let image_2 = document.getElementById("img-2");
    let rect2 = image_2.getBoundingClientRect();

    let offtop = img1.height / 2 - img2.height / 2;
    let offleft = img1.width / 2 - img2.width / 2;

    img1.onload = () => {
      canvas.width = img1.width;
      canvas.height = img1.height;
      ctx.drawImage(img1, 0, 0);
      img2.onload = () => {
        ctx.drawImage(img2, offleft, offtop);
        // console.log(height / 2);
        // console.log(width / 2);
        setMergedImage(canvas.toDataURL());
      };
    };
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
      <button onclick={downloadImage} disabled={!mergedImage}>Download</button>
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
