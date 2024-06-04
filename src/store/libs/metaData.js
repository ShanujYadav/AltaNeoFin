export const getLocation = () => {
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('long----',position.coords.longitude)
                console.log('lat----',position.coords.latitude)
            },
            (err) =>{
                console.log(err.message)
            }
        )
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}