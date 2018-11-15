import React, {Component} from 'react';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import {clearInput, addInput, addResult, copyResult, pasteResult, removeInput} from '../redux/ActionCreators';
import {CalculateOperations} from '../components/Calculate';

export class CreateButton extends Component{
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
         case 'x':
            this.props.removeInput();
            break;
         default:
            this.props.addInput(label);
      }
   }

   render(){
      return <Button 
               className="border  dark w-100 rounded-0" 
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
   pasteResult: () => {dispatch(pasteResult())},
   removeInput: () => {dispatch(removeInput())}
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateButton);