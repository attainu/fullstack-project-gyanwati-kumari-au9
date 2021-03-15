import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
  
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        // const offset = selectedPage * this.props.perPage;
        console.log("Clicking Page", selectedPage )
        this.props.paginationClick(selectedPage)

    };

    render() {
        return (
            <div style={{float:"right"}}>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.props.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}

export default Pagination;
