import moment from 'moment';

// timestamp 0 = January 1st 1970 (Unix epoch)
//Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch= startDate? startDate.isSameOrBefore(createdAtMoment,'day'): true;
        const endDateMatch= endDate? endDate.isSameOrAfter(createdAtMoment,'day'): true;
        const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
        }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt? 1 : -1;
        }
        // sort amount 
        //put higher amount first
        if (sortBy ==='amount') {
            return a.amount < b.amount? 1 : -1;
        };
        });
    };