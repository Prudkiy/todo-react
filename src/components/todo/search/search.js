import React, { Component } from 'react';

export default class Search extends Component {

    constructor () {
        super();

        this.searchTask = (el) => {

            this.props.searchTask(el.target.value);

        }

    }

    render () {

        return (
            <form>
            <input type='text' id='searchBlock' placeholder='Искать задачу'
            onChange={ this.searchTask }
            />
            </form>
        );

    }
/*
    */
};
