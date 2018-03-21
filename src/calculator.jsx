import React, {Component} from 'react';
import ScreenRow from './screen-row';
import Button from './button';
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formula: '',
      answer: ''
    }
    this.onClick = this
      .onClick
      .bind(this)
  }

  onClick(value) {
    // if (value === 'CLEAR') {   this.setState({formula: '', answer: ''}) } if
    // (value === 'EQUALS') {   let answer = eval(this.state.formula).toString()
    // this.setState({formula: '', answer}) } else {   this.setState(prevState => ({
    //     formula: prevState       .formula += value   })); }

    switch (value) {
      case 'CLEAR':
        this.setState({formula: '', answer: ''});
        break;
      case 'EQUALS':
        let answer = eval(this.state.formula).toString();
        this.setState({formula: '', answer});
        break;
      default:
        this.setState(prevState => ({
          formula: prevState.formula += value
        }));
        break;

    }
  }



render() {
  return (
    <div>
      <div className='calculator col-md-4 offset-md-4'>
        <ScreenRow formula={this.state.formula} answer={this.state.answer}/>

        <div className='button-row'>
          < Button calculate={this.onClick} value={1}/>
          < Button calculate={this.onClick} value={2}/>
          < Button calculate={this.onClick} value={3}/>
          < Button calculate={this.onClick} value={4}/>
          < Button calculate={this.onClick} value='+'/>
          < Button calculate={this.onClick} value='*'/>
        </div>
        <div className='button-row'>
          < Button calculate={this.onClick} value={5}/>
          < Button calculate={this.onClick} value={6}/>
          < Button calculate={this.onClick} value={7}/>
          < Button calculate={this.onClick} value={8}/>
          < Button calculate={this.onClick} value='-'/>
          < Button calculate={this.onClick} value='/'/>
        </div>
        <div className='button-row'>
          < Button calculate={this.onClick} value={9}/>
          < Button calculate={this.onClick} value={0}/>
          < Button calculate={this.onClick} value='EQUALS'/>
          < Button calculate={this.onClick} value='CLEAR'/>
        </div>
      </div>
    </div>
  )
}
}


export default Calculator;