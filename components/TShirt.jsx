"use client";
import { useState, useRef } from "react";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";

const TShirtCustomizer = () => {
  const [logo, setLogo] = useState(null);
  const [logoSize, setLogoSize] = useState({ width: 100, height: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const logoRef = useRef(null);
  const containerRef = useRef(null);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle resizing while maintaining aspect ratio
  const handleResize = (event) => {
    const newWidth = event.target.value;
    const aspectRatio = logoSize.width / logoSize.height;
    const newHeight = newWidth / aspectRatio;
    setLogoSize({ width: newWidth, height: newHeight });
  };

  // Event handlers for drag start and stop
  const handleDragStart = () => setIsDragging(true);
  const handleDragStop = () => setIsDragging(false);

  // Download the T-shirt image with logo
  const handleDownload = async () => {
    if (containerRef.current) {
      const canvas = await html2canvas(containerRef.current, {
        useCORS: true, // Allows loading of external images
        scale: 2, // Increases image quality
      });
      const link = document.createElement("a");
      link.download = "customized_tshirt.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      {/* T-Shirt Section */}
      <div
        ref={containerRef}
        className="relative border-2 border-gray-300 p-4"
        style={{
          width: "400px",
          height: "500px",
          backgroundImage: "url('/shirt.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {logo && (
          <Draggable
            nodeRef={logoRef}
            bounds="parent" // Restrict movement within the container
            onStart={handleDragStart}
            onStop={handleDragStop}
          >
            <div
              ref={logoRef}
              className={`absolute cursor-${isDragging ? "grabbing" : "grab"}`} // Change cursor style
              style={{
                width: `${logoSize.width}px`,
                height: `${logoSize.height}px`,
              }}
            >
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Draggable>
        )}
      </div>

      {/* File Uploader */}
      <label className="flex flex-col items-center w-64 px-4 py-6 bg-white rounded-lg shadow-lg cursor-pointer hover:bg-gray-100">
        <svg
          className="w-8 h-8 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 16l-4-4m0 0l-4 4m4-4V4m0 12l4-4m-4 4H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2z"
          />
        </svg>
        <span className="mt-2 text-sm font-medium text-gray-600">
          Upload Logo
        </span>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileUpload}
        />
      </label>

      {/* Resizer */}
      {logo && (
        <div className="flex flex-col items-center space-y-2">
          <label className="text-sm font-medium text-gray-600">
            Resize Logo
          </label>
          <input
            type="range"
            min="50"
            max="300"
            value={logoSize.width}
            onChange={handleResize}
            className="w-64"
          />
        </div>
      )}

      {/* Download Button */}
      {logo && (
        <button
          onClick={handleDownload}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        >
          Download T-Shirt Image
        </button>
      )}
    </div>
  );
};

export default TShirtCustomizer;
