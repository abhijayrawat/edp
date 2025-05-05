import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const LiveLocation = () => {
  const position = [23.1774464, 80.0237461];
  const [primary, setPrimary] = useState('');
  const [secondary, setSecondary] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`
        );
        const data = await res.json();
        const address = data.address || {};

        const primaryText = [address.amenity, address.city_district].filter(Boolean).join(', ');
        const secondaryText = [address.road, address.state_district].filter(Boolean).join(', ');
        const fullText = Object.values(address).filter(Boolean).join(', ');

        setPrimary(primaryText || 'Unknown Place');
        setSecondary(secondaryText || '');
        setFullAddress(fullText || 'Address not available');
      } catch (error) {
        console.error('Error fetching location:', error);
        setPrimary('Location unavailable');
        setSecondary('');
        setFullAddress('Error loading address');
      }
    };

    fetchLocation();
  }, [position]);

  return (
    <div
      className="relative bg-white rounded-2xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-200 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Tooltip with animation */}
      {isHovered && (
        <div
          className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs p-2 rounded-lg shadow-lg z-20 max-w-xs w-fit whitespace-normal opacity-0 translate-y-2 transition-all duration-300 ease-in-out"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          {fullAddress}
        </div>
      )}

      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[#6D8900] font-semibold text-xl">Live Location</h3>
        </div>
      </div>

      <div className="relative h-64">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full z-0">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{primary}<br />{secondary}</Popup>
          </Marker>
        </MapContainer>

        <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-60 rounded-xl p-4 flex items-center justify-between z-10">
          <div>
            <span className="text-[#ECFFA0] text-sm">{secondary}</span>
          </div>

          <button
            onClick={() =>
              window.open(`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`, '_blank')
            }
            className="bg-[#9FC700] text-white px-4 py-2 rounded-full text-sm flex items-center hover:bg-[#7FB800] hover:scale-105 transition-all duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveLocation;
