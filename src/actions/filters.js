//Filter Reducer
//text => '', sortBy => 'date', startDate => undefined, endDate => undefined

//Set filter text
export const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
    });

//sort dy date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    });

//sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    });

//set start Date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
    });

//set end Date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
    });
