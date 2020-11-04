import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { scroller } from 'react-scroll';
import { Container, Divider, Header, Image, Segment } from 'semantic-ui-react';
import apiData from '../../data/api-get';

class Tentang extends Component{
    constructor(props) {
        super(props);
        this.state = {
            logo:'',
            loading:true,
            tentang:[]
        }
    }
    
    componentDidMount(){
        document.title = 'Tentang desalase.id'
        scroller.scrollTo('divider-page',{
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        })
        fetch(apiData.logo)
        .then(response => response.json())
        .then( response=> {
            this.setState({loading:false, logo:response})
        })
        .catch(err=>{
            console.log(err)
        })
        fetch(apiData.tentang)
        .then(response => response.json())
        .then( response=> {
            this.setState({tentang:response})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const {logo, loading, tentang} = this.state
        return (
            <Segment vertical className='tentang-segment'>
                {loading?
                <div>
                    <Skeleton circle width={150} height={150} style={{marginBottom:'30px'}}/>
                    <Skeleton height={30} style={{marginBottom:'30px'}} />
                    <Skeleton count={10} />
                </div>:
                <div>
                    <Image centered size='medium' src={logo} />
                    <br/>
                    {tentang.map((d,i)=>(
                        <Container textAlign='justified'>
                            <Header textAlign='center' as='h1' color='blue'>{d.header}</Header>
                            <Divider />
                            <p dangerouslySetInnerHTML={{__html:d.data}}/>
                            <br/>
                        </Container>
                    ))}
                </div>}
            </Segment>
        );
    }
}

export default Tentang;