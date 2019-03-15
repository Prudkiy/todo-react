import React from 'react';

const Title = ({infoActiveTask, infoDoneTask}) => {
    return (
        <span>
            <h1>Список задач</h1>
            <p>Активных: {infoActiveTask}, Выполнено: {infoDoneTask}</p>
        </span>
    );
};

export default Title;