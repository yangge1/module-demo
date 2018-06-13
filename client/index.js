import React from 'react'
import ReactDOM from 'react-dom'
import {getList} from './service/index'
let listItems=[];

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount() {
        this.request()
    }
    request(){
        getList().then(function(data){
            this.setState(data);
            listItems=data.map((data) =>(
                <li>{this.state.module}
                    this.state.func.map((func)=>(
                        <a href={func.path}>{func.text}</a>
                    ))
                </li>
           ))
          );
        })
    }
    render(){
        return (
            <div>
                <h1>hello,!</h1>
                <ul>
                    {
                       listItems

                    }
                </ul>
            </div> 
        );
    }
}
ReactDOM.render(<App/>,document.getElementById('app'));