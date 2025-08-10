import React, { useState, useEffect } from "react";

const PhotoUploadWithLocation = ({ eventId, volunteerId }) => {
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // Get GPS location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching location", error);
        setLocation(null);
      }
    );
  }, []);

  // Handle image file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo || !location) {
      setUploadStatus("Please upload a photo and allow location access.");
      return;
    }

    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("latitude", location.latitude);
    formData.append("longitude", location.longitude);
    formData.append("volunteerId", volunteerId);
    formData.append("eventId", eventId);
    formData.append("timestamp", new Date().toISOString());

    try {
      const response = await fetch("http://localhost:5000/api/photo/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setUploadStatus("Photo uploaded successfully!");
      } else {
        setUploadStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Upload failed", error);
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div className="p-4 border rounded shadow max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Check-In with Photo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-3"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Upload & Check-In
        </button>
      </form>
      {uploadStatus && <p className="mt-2 text-sm text-gray-700">{uploadStatus}</p>}
    </div>
  );
};

export default PhotoUploadWithLocation;
