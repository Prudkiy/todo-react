import React, {Component} from 'react';

export default class AddTask extends Component {

    constructor () {
        super();

        this.state = {
            label: ''
        }

        this.onLabelChenge = (el) => {

            this.setState({
                label: el.target.value
            });
        }

        this.onSubmit = (el) => {

            el.preventDefault();
            if ( this.state.label !== '' ) {
                this.props.onAddEl(this.state.label);
                this.setState({
                    label: ''
                })
            }

        }

    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input id='addTaskForm' type='text'
                        placeholder='Новая задача'
                        onChange={this.onLabelChenge}
                        value={this.state.label}
                 />
                <button>Добавить</button>
            </form>
        );
    }
    
}