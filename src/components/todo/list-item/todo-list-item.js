import React, { Component } from 'react';

export default class TodoListItem extends Component {

    constructor () {
        super ();
        
    }

    render () {

        const { label, onDeleted, toggleImportant, toggleDone, done, important } = this.props;
   
        let classNameTask = 'todoApp__list-task'; // наполениня стилями текста в сиске задач
        let classNameImportantBut = 'fa fa-exclamation'; // наполениня стилями кнопки важности

        if (done) classNameTask += ' todoApp__list-taskDone';
        if (important){
            classNameTask += ' todoApp__list-important';
            classNameImportantBut += ' todoApp__list-buts-important';
        }
        else {
            classNameImportantBut += ' todoApp__list-buts-dontImportant';
        }

        return (
            <span className='todoApp__list-wrap'>

                <span className={ classNameTask }
                 onClick={ toggleDone }
                 >
                 { label }
                </span>

                <span className='todoApp__list-buts'>
                    <button className={classNameImportantBut} onClick={ toggleImportant }></button>
                    <button className='fa fa-trash-o todoApp__list-buts-delite' onClick={onDeleted}></button>
                </span>
            </span>
        )

    }

}