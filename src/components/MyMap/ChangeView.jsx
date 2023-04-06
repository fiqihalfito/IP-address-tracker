import { useMap } from "react-leaflet";

function ChangeView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
}

export default ChangeView