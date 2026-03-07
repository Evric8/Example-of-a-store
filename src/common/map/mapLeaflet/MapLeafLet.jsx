import { useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // ← Обов’язковий імпорт стилів Leaflet
import L from "leaflet";
import { styles } from "./StylesMapLeafLet";

const createDivIcon = (color = "#ff3333", size = 48) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${
      size * 2
    }" viewBox="0 0 24 24">
      <g transform="translate(0,0)">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" fill="${color}" stroke="#000" stroke-width="0.5"//>
        <circle cx="12" cy="9" r="2.5" fill="white"/>
      </g>
    </svg>
  `;
  return L.divIcon({
    html: svg,
    className: "my-svg-div-icon", // можна стилізувати через CSS
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -18],
  });
};

// flyTo — гарна анімація = можна замінити на setView, якщо хочеш без анімації
function MapController({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, map.getZoom(), {
      animate: true,
      duration: 0.6,
    });
  }, [center, map]);

  return null;
}

// клік по карті
function MapClickHandler({ onMapClick }) {
  useMapEvent("click", (e) => {
    onMapClick([e.latlng.lat, e.latlng.lng]);
  });

  return null;
}

const MapLeafLet = ({
  data,
  department,
  center,
  setCenter,
  handleClickPosition,
  previewIndex,
}) => {
  // console.log(department);
  // console.log(department === "");

  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [previewIndex]);

  const yellow = useMemo(() => createDivIcon("var(--blue-color)", 45), []);

  const blue = useMemo(
    () => createDivIcon("var(--yellow-background-color)", 38),
    [],
  );

  const lightBlue = useMemo(() => createDivIcon("rgb(81, 163, 245)", 45), []);

  return (
    <MapContainer
      center={center}
      zoom={13}
      // scrollWheelZoom={false}
      style={styles.MapContainer}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* керує рухом карти */}
      <MapController center={center} />

      {/* клік по карті */}
      <MapClickHandler onMapClick={setCenter} />

      {data.map((item, index) => {
        const isDep = department === index;

        const isPrev = previewIndex === index;

        let icon = blue;

        if (department !== "") {
          if (isDep) icon = yellow;
          else if (isPrev) icon = lightBlue;
        }

        return (
          <Marker
            ref={isPrev ? markerRef : null}
            key={item.number}
            position={[item.latitude, item.longitude]}
            icon={icon}
            eventHandlers={{
              click: () => handleClickPosition(item, index),
            }}
          >
            {isPrev && !isDep && <Popup>Не вибрано!</Popup>}
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapLeafLet;
