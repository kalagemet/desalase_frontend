import React, { useState } from 'react';
import { Divider, Header, Icon, Input, Segment } from 'semantic-ui-react';
import apiData from '../../data/api-get';
import Kalatog from './Katalog';

export function Home(props){
    const [banner, setBanner] = useState('') 
    const [cari, setCari] = useState('') 
    fetch(apiData.bannerImage)
    .then(response => response.json())
    .then( response=> {
        setBanner(response)
    })
    .catch(err=>{
        console.log(err)
    })
    return (
        <div className='page'>
            <div className='banner-image' style={{backgroundImage:'url('+banner+')'}}>
                <Header as='h1'>Etalase produk desa indonesia</Header>
                <br/>
                <br/>
                <Input
                    size='big'
                    className='home-search'
                    placeholder='Cari Produk...'
                    onChange={e=>setCari(e.target.value)}
                    action={{
                        icon:<Icon size='large' name='search' circular inverted link />,
                        href:'/etalase/cari/'+cari
                    }}
                />
            </div>
            <Divider className='divider-page' />
            <Segment className='page-content' vertical>
                <Kalatog>
                    {props.children}
                </Kalatog>
            </Segment>
        </div>
    );
}