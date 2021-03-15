import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const SearchResults = (props) => {
    const SearchList = props.searchresult.map(res => (
        <ListGroup.Item as="li" key={res.id}>{res.text}</ListGroup.Item>
      ))
    return(
        <ListGroup as="ul" s style={{width:"506px"}}>
            {SearchList}
      </ListGroup>
    )
}

export default SearchResults;


