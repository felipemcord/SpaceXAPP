import React from 'react';
import { CardGroup, Col } from 'reactstrap';
import { LaunchCard } from './LaunchCard';

export function LaunchGroup(props) {
    return(
        <CardGroup className='justify-content-center'>
            {props.launches.map(launch =>
                <Col  className='mx-2 mt-3' sm='12' lg='3' key={launch.id}>
                    <LaunchCard showPrecision={props.showPrecision}  launch={launch}>
                    </LaunchCard> 
                </Col>
            )}                
        </CardGroup>
    )
}