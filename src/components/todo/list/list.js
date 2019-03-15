import React from 'react';

import TodoListItem from '../list-item'

const List = ({ dataList, onDeleted, toggleImportant, toggleDone, filterList }) => {
    

    const elements = dataList.map((item) => {   

        const { key, ... itemProps } = item;


        if(filterList === 'act'){
            if(!itemProps.done){
                return (
    
                    <li key={key}>
                        <TodoListItem 
                        { ... itemProps }
                        onDeleted={ () => onDeleted(key) }
                        toggleImportant={ () => toggleImportant(key) }
                        toggleDone={ ()=> toggleDone(key) }
                        />
                    </li>
                )
            }
        }
        else if (filterList === 'done'){
            if(itemProps.done){
                return (
    
                    <li key={key}>
                        <TodoListItem 
                        { ... itemProps }
                        onDeleted={ () => onDeleted(key) }
                        toggleImportant={ () => toggleImportant(key) }
                        toggleDone={ ()=> toggleDone(key) }
                        />
                    </li>
                )
            }
        }
        else {
                return (
    
                    <li key={key}>
                        <TodoListItem 
                        { ... itemProps }
                        onDeleted={ () => onDeleted(key) }
                        toggleImportant={ () => toggleImportant(key) }
                        toggleDone={ ()=> toggleDone(key) }
                        />
                    </li>
                )
        }

        
        
    });

    return (
    <ul>
        { elements }
    </ul>
    );
};

export default List;
