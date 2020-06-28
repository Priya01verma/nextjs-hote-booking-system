import Head from "next/head";
import Header from "../Features/Header";
import HotelCard from "../Features/hotel/HotelCard";
import { Grid, Container, Box } from "@material-ui/core";
import fetch from 'node-fetch';

export default function Home({hotels=[]}) {
    return (
        <>
            <Head>
                <title>Create Hotel App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container maxWidth={"lg"}>
                <Box pt={5} mt={5}>
                    <Grid
                        container
                        spacing={3}
                        justify={"left"}
                        alignItems={"center"}
                    >
                        {hotels.map((hotelData, index) => {
                            return (
                                <Grid
                                    item
                                    xl={4}
                                    lg={4}
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    key={index}
                                >                               
                                    <HotelCard hotelData={hotelData} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </>
    );
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3003/api/hotels')
    const hotels = await res.json()
    return {
        props:{
            hotels
        }
    }
}
