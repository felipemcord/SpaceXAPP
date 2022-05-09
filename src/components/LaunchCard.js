import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';


export function LaunchCard(props) {
    const precisionDefinition = props.launch.date_precision ? props.launch.date_precision : "No Defined Precision";
    const launchDate = new Date(props.launch.date);
    const payloadsType = props.launch.payloads.map(item => item['type']).join(', ');
    const nationalities = props.launch.payloads.map(item => item['nationalities'].join(', ')).join(', ');
    const customers = props.launch.payloads.map(item => item['customers'].join(', ')).join(', ');
    const imageRocket = props.launch.rocket.images[0];
    const imageLaunchpad = props.launch.launchpad.images[0];
    const precision =  props.showPrecision? `(Precision: ${precisionDefinition})` : "";

    return(<Card >
        <CardImg 
            alt="rocket image"
            src={imageLaunchpad} 
            top
            width="100%"
        />
        <CardBody>

            <CardTitle tag="h5">
                {props.launch.name}
            </CardTitle>

            <CardSubtitle>
                Date of launch: 
                <span className='mx-1 font-weight-bold'>
                    {launchDate.toLocaleDateString("pt-BR")} 
                </span> 
                {precision}
            </CardSubtitle>

            <CardText>
                Rocket: 
                <span className='mx-1 font-weight-bold'>
                    {props.launch.rocket.name}
                </span>
            </CardText>

            <CardText>
                Payload Type:
                <span className='mx-1 font-weight-bold'>
                    {payloadsType}
                </span>
            </CardText>
            <CardText>
                Payload nationality:
                <span className='mx-1 font-weight-bold'>
                    {nationalities}
                </span>
            </CardText>
            <CardText>
                Customers:
                <span className='mx-1 font-weight-bold'>
                    {customers}
                </span>
            </CardText>
        </CardBody>

    </Card>)
}