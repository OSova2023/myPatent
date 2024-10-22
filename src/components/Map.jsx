import React from 'react'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function MyMap() {
  return (
    <YMaps>
    <Map
      defaultState={{ center: [55.720915, 37.650828], zoom: 14 }}
      style={{
        width: "90%",
        height: "440px",
        margin: "20px auto",
      }}
    >
      <Placemark geometry={[55.720915, 37.650828]} />
    </Map>
  </YMaps>
  )
}
