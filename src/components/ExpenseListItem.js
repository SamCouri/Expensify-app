import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => (
<div>
    <Link 
    to={`/edit/${id}`}>
    <h3>{description}</h3>
    </Link>
    <p>{'Amount(cent): '}{amount} - {'Created at(sec):'} {createdAt}</p>
</div>
);

export default(ExpenseListItem);
