import L from 'leaflet';
import mapIcon from '../../../public/images/icon-location.svg'

const myMarker = new L.Icon({
    iconUrl: mapIcon.src,
    iconRetinaUrl: mapIcon.src,
    popupAnchor: [-0, -0],
    iconAnchor: [13, 55],
    popupAnchor: [10, -44],
    // iconSize: [25, 25],
    className: "flex justify-center",
});

export default myMarker