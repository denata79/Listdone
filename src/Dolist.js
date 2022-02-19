import { Component } from "react";

export class Dolist extends Component {
    state = {
        userInput:'',
        Dolist: []
    }
    onSubmitForm(e) {
        e.preventDefault();
    }
    onCangeEvent(e) {
        this.setState ({ userInput: e})
    }    
    addIteam(input) {
        if(input === '') {alert('Внеси данные')}
        else {
            let todolist = this.state.Dolist;
            todolist.unshift(input);
            this.setState({Dolist: todolist, userInput: ""})
        }
    }
    crossWord(e) {
        const li=e.toggel('crossed')
    }
    deliteIteam(e) {
        let todolist = this.state.Dolist;
        todolist = []
        this.setState({Dolist:todolist})
    }
    render() {
return(
    <div>
        <form onSubmit={this.onSubmitForm}>
        <div className="conteiner">
            <input
            type='text'
            placeholder="Планы на день?"
            onChange={(e)=>{this.onCangeEvent(e.target.value)}}
            value={this.state.userInput}
            />
            <ul>
            {this.state.Dolist.map((iteam, index) =>
            (<li onClick={this.crossWord} key ={index}>{iteam}</li>))}
            </ul>
        <button className="green" onClick={()=>this.addIteam(this.state.userInput)}>Добавить</button>
        <button className="red" onClick={()=>this.deliteIteam()}>Очистить</button>
        </div>
        </form>
    </div>
)
    }
}