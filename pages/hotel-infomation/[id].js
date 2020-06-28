import { Grid, Container, Box } from "@material-ui/core";
import { getAllHotelIds } from "../../Models/hotels";
import fetch from "node-fetch";

export default function HotelInformation(props) {
    console.log(props.hotelData);
    return (
        <Container maxWidth="lg">
            <Typography
                component="div"
                style={{ backgroundColor: "#cfe8fc", height: "50vh" }}
            />
        </Container>
    );
}

export async function getStaticPaths() {
    console.log("getstaticpath function called");
    const paths = await getAllHotelIds();
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(params);
    const id = params.id;
    if (!id) {
        throw "id not found";
    }
    const res = await fetch(`http://localhost:3003/api/hotels/${id}`);
    const hotelData = await res.json();
    console.log({ checkparams: hotelData });
    return {
        props: {
            hotelData,
        },
    };
}
