import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { LocationContainer } from "./location.styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import locationdb from "../../db/locationdb";


const Location = () => {
  const [locations, setLocations] = useState(() => ([]));

  let intervalId;

  useEffect(() => {
    setLocations(() => ([...locationdb]));
  }, []);

  useEffect(() => {
    intervalId = setInterval(() => {
      let newLocations = locations.map((item) => {

        let loc = {
          ...item, log: parseFloat(item.log) + 0.0005, lat: parseFloat(item.lat) + 0.0005
        };
        console.log("loc", loc);
        return loc;
      });

      setLocations(() => ([...newLocations]));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [locations]);

  return (
    <LocationContainer>
      <div className="map-container">
        {
          <MapContainer center={[20.298634732968804, 85.74282899190278]} zoom={14}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
              locations.map((item, index) => (
                <Marker key={index} position={[item.lat, item.log]} icon={new Icon({ iconUrl: item.avatar, iconSize: [40, 40] })}>
                  <Popup>{item.locName}</Popup>
                </Marker>
              ))
            }
          </MapContainer>
        }
      </div>

      <div className="user-container">
        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance present">Present</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance absent">Absent</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance present">Present</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance present">Present</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance absent">Absent</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance present">Present</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance present">Present</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance absent">Absent</p>
          </div>
        </div>

        <div className="user-wrapper">
          <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="user" className="user-avatar" />
          <div className="user-details-container">
            <h4 className="user-name">John Doe</h4>
            <p className="attendance present">Present</p>
          </div>
        </div>
      </div>
    </LocationContainer>
  );
};

export default Location;