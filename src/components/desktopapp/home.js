import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import PostMenu from './postMenu';
import AboutMenu from './aboutOfficeMenu';
import Carousel from './carousel';
import CompanyMenu from './companyMenu';

const Home = () => {
    return (
        <Container fluid >
            <Grid celled="internally">
                <Grid.Row>
                    <Grid.Column width={12}>
                        <div style={{marginBottom: '5px'}}><CompanyMenu/></div>
                        <Carousel/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <PostMenu/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Home;