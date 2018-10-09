import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <h1>Calculator</h1>
    )
  }
}

class Display extends Component {

  getResult = () => this.props.result

  render() {
    return (
      <p>{this.props.op ? this.props.num : this.getResult()}</p>
    )
  }
}

class OpButtons extends Component {

  render() {
    const onClickOp = (event) => {
      const op = event.target.value
      const num = this.props.result
      this.props.handleOpEntry(op, num)
    }

    const onClickEquals = () => {
      this.props.handleEquals()
    }

    const onClickClear = () => {
      this.props.handleClear()
    }

      return (
      <div>
        <table>
          <tr>
            <td><button onClick={onClickOp} name='+' value='+'>+</button></td>
            <td><button onClick={onClickOp} name='-' value='-'>-</button></td>
            <td><button onClick={onClickOp} name='x' value='x'>x</button></td>
            <td><button onClick={onClickOp} name='/' value='/'>/</button></td>
          </tr>
          <tr>
            <td><button onClick={onClickEquals} name='=' value='='>=</button></td>
            <td><button onClick={onClickClear} type='reset' name='clear' value='clear'>C</button></td>
          </tr>
        </table>
      </div>
      )
  }
}

class NumButtons extends Component {

  render() {

    const onClickNum = (event) => {
      const num = event.target.value
      this.props.handleNumEntry(num)
    }

    return (
      <div>
        <table>
          <tr>
            <td><button onClick={onClickNum} name='7' value='7'>7</button></td>
            <td><button onClick={onClickNum} name='8' value='8'>8</button></td>
            <td><button onClick={onClickNum} name='9' value='9'>9</button></td>
          </tr>
          <tr>
            <td><button onClick={onClickNum} name='4' value='4'>4</button></td>
            <td><button onClick={onClickNum} name='5' value='5'>5</button></td>
            <td><button onClick={onClickNum} name='6' value='6'>6</button></td>
          </tr>
          <tr>
            <td><button onClick={onClickNum} name='1' value='1'>1</button></td>
            <td><button onClick={onClickNum} name='2' value='2'>2</button></td>
            <td><button onClick={onClickNum} name='3' value='3'>3</button></td>
          </tr>
        </table>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      num: null,
      op: null,
      result: 0
    }
    this.handleNumEntry = this.handleNumEntry.bind(this)
    this.handleOpEntry = this.handleOpEntry.bind(this)
    this.handleEquals = this.handleEquals.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleNumEntry(num) {
    num = Number(num)
    let existing = this.state.num;
    let op = this.state.op
    let final;
    if (op) {
      final = num
      this.setState({
        num: final
      })
    } else {
      final = existing * 10 + num;
      this.setState({
        num: final,
        result:final
      })
    }
  }

  handleOpEntry(op, num) {
    this.setState(
      {op: op,
      result: num,
      num: num}
    )
  }

  handleEquals() {
    const op = this.state.op
    const num = Number(this.state.num)
    let final = Number(this.state.result)
    if (op === '+') {
      final += num
    } else if (op === '-') {
      final -= num
    } else if (op === 'x') {
      final *= num
    } else if (op === '/') {
      final /= num
    }
    this.setState({
      num: null,
      op: null,
      result: final
    })
  }

  handleClear() {
    this.setState({
      num: null,
      op: null,
      result: 0
    })
  }

  render() {
    return (
      <div>
        <Title />
        <NumButtons
        handleNumEntry={this.handleNumEntry}
        num={this.state.num} />
        <OpButtons
        handleOpEntry={this.handleOpEntry}
        num={this.state.num}
        result={this.state.result}
        handleEquals={this.handleEquals}
        handleClear={this.handleClear}
        op={this.state.op} />
        <Display handleNumEntry={this.handleNumEntry}
        num={this.state.num}
        op={this.state.op}
        result={this.state.result} />
      </div>
    )
  }
}

















































































// const Title = () => {
//   return (
//     <h1>Calculator</h1>
//   )
// }

// const Button = (props) => {
//   return (
//     <input
//       type='button'
//       value={props.label}
//       onClick={props.handleClick}
//     ></input>
//   )
// }

// const ScreenRow = (props) => {
//   return (
//     <div>
//       <input type='text' readOnly={true} value={props.value} />
//     </div>
//   )
// }

// const Screen = (props) => {
//   return (
//     <div>
//       <ScreenRow value={props.question}/>
//       <ScreenRow value={props.answer}/>
//     </div>
//   )
// }

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       question: '',
//       answer: ''
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick = (event) => {
//     const clicked = event.target.value
//     switch (clicked) {
//       case '=': {
//         const answer = eval(this.state.question).toString()
//         this.setState({
//           answer
//         })
//         break;
//       }
//       case 'CLS': {
//         this.setState({
//           question: '',
//           answer: ''
//         })
//         break;
//       }
//       default : {
//         const newQuestion = this.state.question + clicked
//         this.setState({
//           question: (newQuestion)
//         })
//       }
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Title />
//         <Screen question={this.state.question} answer={this.state.answer}/>
//         <div>
//          <table>
//            <tr>
//              <td><Button handleClick={this.handleClick} label='7' type='input' /></td>
//              <td><Button handleClick={this.handleClick} label='8' type='input' /></td>
//              <td><Button handleClick={this.handleClick} label='9' type='input' /></td>
//            </tr>
//            <tr>
//              <td><Button handleClick={this.handleClick} label='4' type='input' /></td>
//              <td><Button handleClick={this.handleClick} label='5' type='input' /></td>
//              <td><Button handleClick={this.handleClick} label='6' type='input' /></td>
//            </tr>
//            <tr>
//              <td><Button handleClick={this.handleClick} label='1' type='input' /></td>
//              <td><Button handleClick={this.handleClick} label='2' type='input' /></td>
//              <td><Button handleClick={this.handleClick} label='3' type='input' /></td>
//            </tr>
//           </table>
//           <table>
//            <tr>
//              <td><Button handleClick={this.handleClick} label='+' type='action' /></td>
//              <td><Button handleClick={this.handleClick} label='-' type='action' /></td>
//              <td><Button handleClick={this.handleClick} label='x' type='action' /></td>
//              <td><Button handleClick={this.handleClick} label='/' type='action' /></td>
//            </tr>
//            <tr>
//              <td><Button handleClick={this.handleClick} label='=' type='action' /></td>
//              <td><Button handleClick={this.handleClick} label='CLS' type='action' /></td>
//            </tr>
//          </table>
//        </div>
//       </div>
//     );
//   }
// }

export default App;
