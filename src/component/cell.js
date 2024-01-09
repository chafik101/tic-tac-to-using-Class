import { Component } from "react";



class Cell extends Component{
    constructor(props){
        super(props)
    }


    handelClick=(e)=>{
        const taken = !this.props.cells[this.props.id]
        if(taken){
            if(this.props.go==='circle'){
               
                this.props.updateGo("cross")
                this.handelChange("circle")
            }else if(this.props.go==='cross'){
                
                this.handelChange("cross")
                this.props.updateGo("circle")
            }
        }
    }

    handelChange=(cellToChange)=>{
        let copyCells = [...this.props.cells]
        console.log(this.props.id)
        copyCells[this.props.id]=cellToChange
        console.log(copyCells)
        this.props.updateCells(copyCells)
        // console.log(this.props.cells)
    }

    render(){
        return(
            <div className="square" onClick={this.handelClick}> 
            <div className={this.props.cell}  > {this.props.cell? (this.props.cell === "circle" ? "O" : "X" ) : ""}</div>
            </div>
        )
    }
}

export default Cell