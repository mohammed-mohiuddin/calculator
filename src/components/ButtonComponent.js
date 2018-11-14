import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import {clearInput, addInput, addResult, copyResult, pasteResult} from '../redux/ActionCreators';
import {CalculateOperations} from '../components/Calculate';

class CreateButton extends Component{
   constructor(props){
      super(props);

      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(){
      const label = this.props.label;
      switch (label){
         case 'C':
            this.props.clearInput();
            break;
         case '=':
            const result = CalculateOperations(this.props.operations.operations);
            this.props.addResult(result);
            break;
         case 'copy':
            this.props.copyResult();
            this.props.clearInput();
            break;
         case 'paste':
            this.props.pasteResult();
            break;
         default:
            this.props.addInput(label);
      }
   }

   render(){
      return <Button 
               className="w-100" 
               value={this.props.label} 
               color="success" size="lg" 
               onClick={this.handleClick}>
                  {this.props.label}
            </Button>
   }
}

const mapStateToProps = (state) => {
   return {
       labels: state.labels,
       operations: state.operations
   }
}

const mapDispatchToProps = dispatch => ({
   addInput: (character) => {dispatch(addInput(character))},
   clearInput: () => {dispatch(clearInput())},
   addResult: (result) => {dispatch(addResult(result))},
   copyResult: () => {dispatch(copyResult())},
   pasteResult: () => {dispatch(pasteResult())}
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateButton);