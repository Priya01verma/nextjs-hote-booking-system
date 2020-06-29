import { Grid, Container, Box } from "@material-ui/core";
import { getAllHotelIds } from "../../Models/hotels";
import fetch from "node-fetch";
import Header from "../../Features/Header";

export default function HotelInformation(props) {
    let { hotelData: { picture } = {} } = props;
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Box
                    style={{
                        backgroundImage: `url(${picture})`,
                        backgroundColor: "#cfe8fc",
                        height: "80vh",
                        backgroundSize: "cover",
                    }}
                />
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const paths = await getAllHotelIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.id;
    if (!id) {
        throw "id not found";
    }
    const res = await fetch(`http://localhost:3003/api/hotels/${id}`);
    const hotelData = await res.json();
    return {
        props: {
            hotelData,
        },
    };
}
