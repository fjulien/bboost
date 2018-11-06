import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const CardElement = (props) => {
    return (
        <div>
            <Card inverse>
                <CardImg width="100%" src={props.image} alt="Card image cap" />
                <CardImgOverlay>
                    <CardTitle>{props.title}</CardTitle>
                    <CardText>
                        {props.description}
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>
    );
};

export default CardElement;
