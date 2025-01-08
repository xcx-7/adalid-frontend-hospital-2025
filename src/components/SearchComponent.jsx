import React from "react";

class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
        this.searchField = React.createRef();
    }
    
    componentDidMount() {
        this.searchField.current.focus();
    }

    submitSearch(e) {
        e.preventDefault();
        alert('Búsqueda en construcción');
        this.searchField.current.focus();
    }
  
    render() {
        return (
            <div className='card mt-5' id="search">
                <h4>Buscador</h4>
                <form className="search-form" onSubmit={this.submitSearch}>
                    <input type="text" name="searchField" className="form-control" ref={this.searchField} required/>
                    <button type="submit" className="btn btn-primary">Buscar</button>
                </form>
            </div>
        )
    }
}

export default SearchComponent;