import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Breadcrumb, Button, Container, Divider, Grid, Header, Image, Segment, Statistic } from 'semantic-ui-react';
import apiData from '../../data/api-get';
import { scroller } from 'react-scroll';
import Skeleton from 'react-loading-skeleton';

class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true, 
            noDetail:false,
            data:[],
            image:[],
            linktree:[],
            breadcrumb:[],
            tags:[]
        }
    }

    componentDidMount(){
        const {id} =  this.props.match.params;
        this.scrollTop();
        fetch(apiData.detail+id)
        .then(response => response.json())
        .then( response=> {
            if (response.error) {
                this.setState({noDetail:true, loading:false})
            }else{
                this.setState({
                    data:response, 
                    image:response.image,
                    tags:response.tags,
                    breadcrumb:response.breadcrumb,
                    linktree:response.link,
                    loading:false
                })
                document.title = this.state.data.nama+' - desalase.id'
            }
        })
        .catch(err=>{
            console.log(err)
            alert(err)
        })
    }

    scrollTop(){
        scroller.scrollTo('divider-page', {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }

    render() {
        const settings = {
            dots: true,
            autoplay: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const {loading,linktree,breadcrumb,tags,image,data, noDetail} = this.state;
        return (
            <Container>
                {noDetail ? 
                loading?<br/>:<Statistic className='no-produk-msg' label='Tidak ada produk yang dapat ditampilkan' value='Tidak Tersedia' text /> 
                :<Segment vertical textAlign='left' className='detail-container'>
                    {loading?
                    <Skeleton height={20} width={'70%'} />
                    :<Breadcrumb>
                        {breadcrumb.map((d,i)=>{
                            if (i===d.length-1) 
                            return  <d>
                                        <Breadcrumb.Section href={d.link} link>{d.nama}</Breadcrumb.Section>
                                        <Breadcrumb.Divider icon='right arrow'/>
                                    </d>
                            return  <d>
                                        <Breadcrumb.Section href={d.link} link>{d.nama}</Breadcrumb.Section>
                                        <Breadcrumb.Divider icon='right chevron'/>
                                    </d>
                        })}
                        <Breadcrumb.Section active href={''} link>{data.nama}</Breadcrumb.Section>
                    </Breadcrumb>}
                    <Grid className='detail-group'>
                        <Grid.Column mobile={16} tablet={6} computer={6}>
                            {loading?
                            <Skeleton height={'100%'} />
                            :<Image.Group className='detail-image'>
                                <Slider {...settings}>
                                    {image.map((d, i)=>(
                                        <Image rounded key={i} src={d}/>
                                    ))}
                                </Slider>
                            </Image.Group>}
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10}>
                            <Header className='detail-deskripsi'>
                                {loading?
                                <div>
                                    <Skeleton style={{marginBottom:'20px'}} height={30} width={'100%'} />
                                </div>:
                                <Header.Content as='h1'>
                                    {data.nama}
                                    <Header.Subheader>
                                        Produsen :{data.produsen}
                                    </Header.Subheader>
                                </Header.Content>}
                                {loading?
                                <Skeleton width={'100%'} count={2}/>:
                                <p dangerouslySetInnerHTML={{__html:data.deskripsi}}/>}
                                {loading?
                                <Skeleton width={'50%'} height={30} />:
                                <Statistic horizontal color='green'>
                                    <Statistic.Value>{data.harga}</Statistic.Value>
                                    <Statistic.Label>Rupiah</Statistic.Label>
                                </Statistic>}
                            </Header>
                            <Divider/>
                            {loading?
                            <Skeleton width={'100%'} height={50}/>:
                            <div>
                                <Button className='link-tree-button' as='a' href={linktree[0]} fluid size='big' content='Whatsapp' icon='whatsapp' color='teal' labelPosition='left' />
                                <br/>
                                <Button className='link-tree-button' as='a' href={linktree[1]} fluid size='big' content='Tokopedia' icon='shopping bag' color='green' labelPosition='left' />
                                <br/>
                                <Button className='link-tree-button' as='a' href={linktree[2]} fluid size='big' content='Shopee' icon='gift' color='orange' labelPosition='left' />
                                <br/>
                            </div>}
                        </Grid.Column>
                    </Grid>
                    <Container className='tags-container'>
                    {tags.map((d,i)=>(
                        <Button basic key={i} href={'/etalase/tags/'+d} content={d} icon='tag' color='blue' labelPosition='right'/>
                    ))}
                    </Container>
                </Segment>}
                <Divider className='bootom-detail' />
            </Container>
        );
    }
}

export default Detail;