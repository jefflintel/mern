import { useParams } from "react-router-dom/cjs/react-router-dom";
import PlaceList from "../components/PlaceList";

 export const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "An extremely famous building",
        imageUrl: "https://placekitten.com/400/400",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484445,
            lng: -73.9882393
        },
        creator: "u2"
    },
    {
        id: "p2",
        title: "Empire State Building",
        description: "An extremely famous building",
        imageUrl: "https://placekitten.com/350/350",
        address: "20 W 34th St., New York, NY 10001",
        location: {
            lat: 40.7484445,
            lng: -73.9882393
        },
        creator: "u3"
    },
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;