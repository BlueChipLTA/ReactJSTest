import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-12">
  <div className="form-group">
    <div className="btn-group">
      <input type="text" className="form-control" placeholder="Nhap text" style={{width: 610}} />
      <div className="btn btn-info">Tim</div>
      
    </div>
    <div className="btn-group1">
    <div className="btn btn-block btn-outline-secondary">Dong Lai</div>
      <div className="btn btn-block btn-outline-info">them moi</div>
    </div>
  </div>
  <hr/>
</div>

        );
    }
}

export default Search;