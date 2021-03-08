import { useState } from 'react';
import * as Location from "expo-location";

export default useLocation = async () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    const getLocation = async () => {
      try {
        const { granted } = await Location.requestPermissionsAsync();
        if (!granted) return;
        const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude })
      } catch (e) {
        console.log(e.message);
      }
    }
    getLocation()
  }, [])
  return location
}