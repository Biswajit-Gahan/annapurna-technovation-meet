import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { LocationContainer } from "./location.styles";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
// import locationdb from "../../db/locationdb";
import officeImage from "../../assets/images/office.jpeg";
import userImage from "../../assets/images/user.png"

import { database } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
// import { onValue, ref, set, update } from "firebase/database";


const Location = () => {
  const [locations, setLocations] = useState(() => ([]));

  console.log(!locations);

  let intervalId = useRef();

  // useEffect(() => {
  //   setLocations(() => ([...locationdb]));
  // }, []);

  const sortData = (data) => {
    data.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return data;
  };

  useEffect(() => {
    onValue(ref(database, "/geolocation"), (snapshot) => {
      const data = snapshot.val();
      console.log("data", data);
      let sortedData = sortData(data);
      data && setLocations(() => ([...sortedData]));
    })
  }, []);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      // let newLocations = locations.map((item) => {

      //   let loc = {
      //     ...item, log: parseFloat(item.log) + 0.0005, lat: parseFloat(item.lat) + 0.0005
      //   };
      //   console.log("loc", loc);
      //   return loc;
      // });

      onValue(ref(database, "/geolocation"), (snapshot) => {
        const data = snapshot.val();
        console.log("data", data);
        let sortedData = sortData(data);
        data && setLocations(() => ([...sortedData]));
      })
    }, 8000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [locations]);

  return (
    <LocationContainer>
      <div className="map-container">
        {
          <MapContainer center={[20.223125388618012, 85.72188696931921]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {
              !!locations && locations.map((item, index) => (
                <Marker key={index} position={[item.latitude, item.longitude]} icon={new Icon({ iconUrl: item.imageUrl || userImage, iconSize: [50, 50] })}>
                  <Popup>{item.name}</Popup>
                </Marker>
              ))
            }
            <Marker position={[20.223125388618012, 85.72188696931921]} icon={new Icon({ iconUrl: officeImage, iconSize: [50, 50] })}> <Popup>Annapurna Training Center, Janla</Popup></Marker>
          </MapContainer>
        }
      </div>

      <div className="user-container">
        {
          locations.map((item, index) => (
            <div className="user-wrapper" key={index}>
              <img src={item.imageUrl || userImage} alt="user" className="user-avatar" />
              <div className="user-details-container">
                <h4 className="user-name">{item.name}</h4>
                <p className={`attendance ${item?.arrived ? "present" : "absent"}`}>{item?.arrived ? "Arrived" : "Not Arrived"}</p>
              </div>
            </div>
          ))
        }
      </div>
    </LocationContainer>
  );
};

export default Location;