import { MapContainer, TileLayer, useMap, Marker, Popup, } from 'react-leaflet'
import ChangeView from './ChangeView'
import myMarker from './icon'

const MyMap = ({ center, lat, long }) => {
    const initialPosition = [0, 0]
    return (
        <MapContainer center={initialPosition} zoom={13} scrollWheelZoom={true} className='h-full w-full z-0'>
            <ChangeView center={[lat + 0.013, long]} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, long]} icon={myMarker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MyMap