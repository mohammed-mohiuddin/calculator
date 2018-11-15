import React, {Component} from 'react';
import {Input, Col, ButtonGroup} from 'reactstrap';
import Buttons from './Buttons';
import {fetchLabels, addInput, clearInput} from '../redux/ActionCreators';
import {connect} from 'react-redux';


class Main extends Component {
    componentDidMount(){
        this.props.fetchLabels();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Col md={4}>
                        <Input 
                            className="rounded-0"
                            type="text" 
                            bsSize="lg"
                            value={this.props.operations.operations.join('')}
                            readOnly
                            
                        />
                    </Col>
                </div>
                <div className="row">
                    <Col md={4}>
                        <Buttons 
                            labels={this.props.labels} />
                    </Col>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        labels: state.labels,
        operations: state.operations
    }
}

const mapDispatchToProps = dispatch => ({
    fetchLabels: () => {dispatch(fetchLabels())}
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);