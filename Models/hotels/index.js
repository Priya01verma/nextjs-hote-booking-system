import fetch from "node-fetch";

export async function getAllHotelIds() {
    const res = await fetch("http://localhost:3003/api/hotels");
    const hotels = await res.json();
    console.log(hotels);
    return hotels.map((hotel) => {
        return {
            params: {
                id: hotel.id
            },
        };
    });
}
