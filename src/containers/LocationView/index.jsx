import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import IconMarker from "../../assets/images/pindrop.jpg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customMarkerIcon = new L.Icon({
  iconUrl: IconMarker, // Provide the URL to your custom marker icon
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationView = () => {
  // Coordinates for Kathmandu, Nepal
  const kathmanduPosition = [27.7172, 85.324];

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <MapContainer
        center={kathmanduPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={kathmanduPosition} icon={customMarkerIcon}>
          <Popup>Kathmandu, Nepal</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationView;
