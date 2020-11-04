import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Header, Icon, Label, List } from 'semantic-ui-react';
import apiData from '../../../data/api-get';

class Footer extends Component{
    constructor(props) {
        super(props);
        this.state ={
            footerData: [],
            isLoading: true 
        }
    }
    
    componentDidMount(){
        fetch(apiData.footer)
        .then(response => response.json())
        .then( response=> {
            this.setState({footerData:response, isLoading:false})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        const {footerData, isLoading} = this.state;
        return (
            <Container fluid className='footer-container'>
                <Grid>
                    <Grid.Row>
                        <Grid.Column mobile={16} tablet={16} computer={6}>
                            <Grid.Row>
                                <Header inverted as='h1'>Desalase.id</Header>
                                <Divider inverted/>
                            </Grid.Row>
                            {isLoading ? 
                                <Grid.Row>
                                    <Header inverted as='h4'>
                                        <Skeleton circle width={50} height={50} />
                                        <Header.Content>
                                            <Skeleton height={30} width={150} style={{marginLeft:'10px'}} />
                                            <Header.Subheader>
                                                <Skeleton height={20} width={250} style={{marginLeft:'10px'}} />
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    <Divider inverted/>
                                </Grid.Row>
                            :footerData.alamat.map((data, i) => (
                                <Grid.Row key={i} as={Link} to={data.link}>
                                    <Header inverted as='h4'>
                                        <Icon name={data.icon}/>
                                        <Header.Content>
                                            {data.header}
                                            <Header.Subheader>
                                                {data.data}
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    <Divider inverted/>
                                </Grid.Row>
                            ))
                            }
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={5}>
                            <Grid.Row>
                                <Header inverted as='h1'>Toko Online</Header>
                                <Divider inverted/>
                            </Grid.Row>
                            {isLoading ? 
                                <Grid.Row>
                                    <Header inverted as='h4'>
                                        <Skeleton circle width={50} height={50} />
                                        <Header.Content>
                                            <Skeleton height={30} width={150} style={{marginLeft:'10px'}} />
                                            <Header.Subheader>
                                                <Skeleton height={20} width={250} style={{marginLeft:'10px'}} />
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    <Divider inverted/>
                                </Grid.Row>
                            :footerData.toko.map((data, i) => (
                                <Grid.Row key={i} as={Link} to={data.link}>
                                    <Header inverted as='h4'>
                                        <Icon name={data.icon}/>
                                        <Header.Content>
                                            {data.header}
                                            <Header.Subheader>
                                                {data.data}
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    <Divider inverted/>
                                </Grid.Row>
                            ))
                            }
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={16} computer={5}>
                            <Grid.Row>
                                <Header inverted as='h1'>Peta Situs</Header>
                                <Divider inverted/>
                            </Grid.Row>
                                <Grid.Row as={Link} to='#'>
                                    <List inverted as={Header}>
                                        <List.Item as={Link} to='/'>Beranda</List.Item>
                                        <List.Item as={Link} to='/etalase'>Etalase</List.Item>
                                        <List.Item as={Link} to='blog'>Blog{' '}<Label color='red' size='mini' tag>Comming soon</Label></List.Item>
                                        <List.Item as={Link} to='/tentang'>Tentang</List.Item>
                                    </List>
                                </Grid.Row>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Footer;