import React, {Component} from 'react';

import Title from './title';
import Search from './search';
import Filter from './filter';
import List from './list';
import AddTask from './add-task';

export default class App extends Component {

    constructor () {
        super();

        this.maxId = 100,

        this.createTodoItem = (label) => {
            return {
                label: label,
                important: false,
                done: false,
                key: this.maxId++
            }
        }

        this.state = {
            dataList : [
                this.createTodoItem('task number 1'),
                this.createTodoItem('task number 2'),
                this.createTodoItem('task number 3')
            ],
            myFilter: 'all',
            term: ''
        }

        this.deleteItem = (id) => {
            this.setState(({ dataList })=>{
                const idx = dataList.findIndex((el)=>el.key === id);
                const newArray = [
                    ... dataList.slice(0, idx),
                    ... dataList.slice(idx +1)
                    ];
                return {
                    dataList: newArray
                }
            });
        }

        this.addTaskEl = (text) => {

            const newTask = this.createTodoItem(text);

            this.setState(({ dataList }) => {
                const newArr = [
                    ... dataList,
                    newTask
                ];
                return {
                    dataList: newArr
                }
            });


        }

        this.toggleImportant = (id) => {
            
            this.setState(({dataList})=>{
                return {
                    dataList: this.toggleProperty (dataList, id, 'important')
                }

            })
            

        }

        this.toggleDone = (id) => {

            this.setState(({dataList})=>{
                return {
                    dataList: this.toggleProperty (dataList, id, 'done')
                }

            })
            
        }

        this.toggleProperty = (arr, id, name) => {
            
            const idx = arr.findIndex((el)=>el.key === id);
            const oldItem = arr[idx];
            const newItem = { ... oldItem, [name]: !oldItem[name] }
            return [
                ... arr.slice(0, idx),
                    newItem,
                ... arr.slice(idx +1)
                ];
            
        }

        this.notContent = () => {

            if(this.state.dataList.length === 0) return <img id='iconNotContent' src="./assets/img/add.png" alt="" />

        }

        this.filterTask = (filterList) => {
            

            if ( filterList === 'act' ) {
                this.setState(({myFilter})=>{
                    return {
                        myFilter: 'act'
                    }
                });
            }
            else if ( filterList === 'done' ) {
                this.setState(({myFilter})=>{
                    return {
                        myFilter: 'done'
                    }
                });
            }
            else {
                this.setState(({myFilter})=>{
                    return {
                        myFilter: 'all'
                    }
                });
            }
        }


        this.searchTask = (searchText) => {
            
            this.setState({
                term: searchText
            })

        }

        this.search = (items, term) => {
            if (term.length === 0) return items;
            return items.filter((item) => {
                return item.label.indexOf(term) > -1;
            });
        }


    }

    render(){

        

        const countDoneTask = this.state.dataList.filter((el) => el.done).length;
        const countActiveTask = this.state.dataList.length - countDoneTask;

        const { dataList, term } = this.state;

        const visibleItems = this.search(dataList, term);


        return (
            <div className='todoApp'>

                <div className='todoApp__title'>

                    <Title 
                    infoActiveTask={countActiveTask}
                    infoDoneTask={countDoneTask}
                    />

                </div>

                <div className='todoApp__searchAndFilter'>
                    <div className='todoApp__search'>

                        <Search
                        searchTask={this.searchTask}
                        />

                    </div>
                    <div className='todoApp__filter'>

                        <Filter
                        onFilter={ this.filterTask }
                        />

                    </div>
                </div>

                <div className='todoApp__list'>

                    <List dataList = { visibleItems }
                    onDeleted = { this.deleteItem }
                    toggleImportant= { this.toggleImportant }
                    toggleDone = { this.toggleDone }
                    filterList = { this.state.myFilter }
                    />

                </div>

                <div  className='todoApp__addTask'>

                    <AddTask
                    onAddEl={ this.addTaskEl }
                    />

                </div>

            </div>
        )
    }



};
