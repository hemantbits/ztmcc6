import React, {Component} from 'react'

class Q2 extends Component {

  constructor() {
    super();
    this.state = {
      arrayNumbers: '',
      target: '',
      answer: [],
      submitClicked: false,
    };
    
    this.handleChangeArrayNumbers = this.handleChangeArrayNumbers.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.findValuesForTarget = this.findValuesForTarget.bind(this);
  }

  handleChangeArrayNumbers(event) {
    if(this.submitClicked) {
      this.setState({answer: ''})
      this.setState({submitClicked: false})
    }
    this.setState({arrayNumbers: event.target.value});
  }

  handleChangeTarget(event) {
    this.setState({answer: ''})
    this.setState({target: event.target.value});
  }

  handleClear(event) {
    event.preventDefault();
    this.setState({arrayNumbers: ''});
    this.setState({target: ''})
    this.setState({answer: ''})
    this.setState({submitClicked: false})
  }

  findValuesForTarget() {
    let { arrayNumbers, target } = this.state;

    let found = false;
    
    if(arrayNumbers !== '' && target !== '') {
      const array = arrayNumbers.split(',');
      //console.log('Array ' + array);
      let index;
      
      for(index = 0; index < array.length && found === false; index++) {
        let value = array[index];
        //console.log('value ' + value);
        let count;
        for(count =  index+1; count < array.length; count++) {
          //console.log('array[ ' + count + ' ] : ' + array[count] + ' sum = ' + (Number(array[count]) + Number(value)) + ' target ' + target);
          if(Number(array[count]) + Number(value) === Number(target)) {
            //console.log('value ' + value + ' array[count] ' + array[count]);
            const printAnswer='['+value+','+array[count]+']';
            this.setState({answer: printAnswer});
            found = true;
            break;
          }
        }
      }

      if(!found) {
        this.setState({answer: 'Could not find an answer!'})
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitClicked: true})
    this.findValuesForTarget()
  }

  render() {
    return (
      
        <form>
          <div className="flex-container">
            <div className="flex-item">
              <label className="pa5">Enter array numbers (separated by comma)</label>
              <input className="ba f5" type="text" value={this.state.arrayNumbers} onChange={this.handleChangeArrayNumbers}/>
              <label className="pa5">Enter target number</label>
              <input className="ba f5" type="text" value={this.state.target} onChange={this.handleChangeTarget}/>

              <label className="pa2 br3 f5">
                {this.state.answer}
              </label>
            </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">
            <input
              className="b mh3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Clear"
              onClick={this.handleClear}
             />
             <input
              className="b mh3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Submit"
              onClick={this.handleSubmit}
             />
             </div>
          </div>
        </form>
    );
  }
}

export default Q2