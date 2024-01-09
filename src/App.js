
import {Component} from 'react'
import './App.css'
import Cell from './component/cell'




class App extends Component {
  constructor(props){
    super(props)
    this.state={
      cells:["","","","","","","","",""],
      go:"circle",
      res:"",
       listWin: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
    }
  
  }

 
  updateGo=(value)=>{
    this.setState({go:value})
  }
  updateCells=(value)=>{
    this.setState({cells:value})
  }


  
  componentDidUpdate(prevProps,prevState){

    if(!this.state.res  && this.state.cells.every(item=> item!=="") ){
      this.setState({res:"Drow!"})
    }
    
    this.state.listWin.forEach((combo)=>{
      const circleWin = combo.every((item)=> this.state.cells[item] === "circle")
      const crossWin = combo.every((item)=> this.state.cells[item] === "cross")
     
    
     if(prevState.res==="" && circleWin){
        console.log('change')
        this.setState({res:"circle win"})
      }else if(prevState.res==="" && crossWin){
        console.log('change')
        this.setState({res:"cross win"})
      }

   })
  }




  render(){
    return(
      <main>

         <div className='board' >  
         {this.state.cells.map((cell,index)=>(
          <Cell key={index} cell={cell} id={index} cells={this.state.cells} updateGo={this.updateGo} updateCells={this.updateCells} go={this.state.go} />
         ))}
         </div>
         <div>{this.state.res? this.state.res:""}</div>
         <div>its now {this.state.go} turn!</div>
      </main>
    )
  }
}

export default App;