import React from 'react';
import { api } from '../instances';

import ReactPaginate from 'react-paginate';


class MainPage extends React.PureComponent {

    state = { list: [], search: "100000784920102", pageCount: 0, pageIndex: 0 }

    componentDidMount() {
        this.doSearch()
    }

    doSearch = () => {
        const { search } = this.state

        api.getFriend(search).then(res => {

            const list = res.data.data;

            const pageCount = list / 15;

            this.setState({ list: res.data.data, pageCount, pageIndex: 1 })
        })
    }

    render() {
        const { list, search, pageCount, pageIndex } = this.state

        const data = list.slice((pageIndex - 1) * 15, pageIndex * 15)

        return (
            <div>
                <input
                    onChange={(e) => this.setState({ search: e.target.value })}
                    value={search}
                />
                <button type='submit' onClick={this.doSearch}>Search friend</button>
                {data.map(f => {
                    return (
                        <div class="friend_info">
                            <div class="img">
                                <img src={`http://graph.facebook.com/${f.id}/picture?type=large`} />
                                <h1>{f.id}</h1>
                                <a class="title" href={`https://www.facebook.com/${f.id}`} target='_blank'>{f.name}</a>
                            </div>
                        </div>
                    )
                })}
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(index) => this.setState({ pageIndex: index })}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }
}

export default MainPage 