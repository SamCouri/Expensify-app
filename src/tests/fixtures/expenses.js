import moment from 'moment';

    export default [{
        id: '1',
        description: 'Gum',
        note: '',
        amount: 195,
        createdAt: moment().valueOf()
    },
     {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
        createdAt: moment().subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Credit card',
        note: '',
        amount: 4500,
        createdAt: moment().add(4, 'days').valueOf()
    },
];
