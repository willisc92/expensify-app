import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    
    return (
        <div>
            Editing the expense with an id of {props.match.params.id}
        </div>
    );
}

// React router passes down components passed down in a route, including:
// history
// location - for use with hash values (example: localhost:8080/edit#contact-us) or search (example: localhost:8080/edit?query-rent&sort=date)
// match (for dynamic pages)

export default EditExpensePage;