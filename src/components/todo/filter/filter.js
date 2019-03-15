import React, { Component } from 'react';

export default class Filter extends Component {

    constructor () {
        super();

        this.onFilter = (e) => {

            this.butStyle(e);

            if ( e.target.value === 'act' ) this.props.onFilter('act');
            else if ( e.target.value === 'done' ) this.props.onFilter('done');
            else this.props.onFilter('all');
            
        }

        this.butStyle = (e) => {
            let allBut = document.querySelectorAll('.todoApp__filter--but button');
            allBut.forEach(function(item) {
                item.className = '';
              });
            e.target.className = 'todoApp__filter--butAct'
        }


    }

    render () {

        return (
            <div id='todoApp__butFilter' className='todoApp__filter--but'>

                <button className='todoApp__filter--butAct'
                        onClick={ this.onFilter }
                >Все</button>

                <button
                onClick={ this.onFilter }
                value='act'
                >Активные</button>

                <button
                onClick={ this.onFilter }
                value='done'
                >Выполнено</button>

            </div>
        );

    }

}