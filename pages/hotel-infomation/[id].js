import { Grid, Container, Box } from "@material-ui/core";

export default function HotelInformation(){
    return(
    <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
      </Container>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
    console.log("function called");
    console.log(params);
    // Fetch necessary data for the blog post using params.id
  }