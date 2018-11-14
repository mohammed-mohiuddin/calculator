import React, {Component} from 'react';
import CreateButton from './ButtonComponent';
import {Col} from 'reactstrap';

const Buttons = (props) => {
    const buttons =  props.labels.labels.map((label, index) => {
        return(
        <Col md={3} key={index}>
            <CreateButton 
                label={label} />
        </Col>);
    });

    return(
        <div className="row no-gutters">
            {buttons}
        </div>
    );
}

export default Buttons;