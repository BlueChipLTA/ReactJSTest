import React, { Component } from 'react';

class TableData extends Component {
    render() {
        return (
            <div className="col-9">
            <table className="table table-striped table-hover table-{1:striped|sm|bordered|hover|inverse}">
              <thead className="thead-inverse|thead-default">
                <tr>
                  <th>STT</th>
                  <th>Ten</th>
                  <th>Dien Thoai</th>
                  <th>Quyen</th>
                  <th>Thao tac</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td >1</td>
                  <td>tuan afsaf adsasd</td>
                  <td>0187wewewedwd3</td>
                  <td>aba</td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sua</div>
                      <div className="btn btn-danger xoa"><i className="fa fa-delete    " />Sua</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td >1</td>
                  <td>tuan afsaf adsasd</td>
                  <td>0187wewewedwd3</td>
                  <td>aba</td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sua</div>
                      <div className="btn btn-danger xoa"><i className="fa fa-delete    " />Sua</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td >1</td>
                  <td>tuan afsaf adsasd</td>
                  <td>0187wewewedwd3</td>
                  <td>aba</td>
                  <td>
                    <div className="btn-group">
                      <div className="btn btn-warning sua"><i className="fa fa-edit    " />Sua</div>
                      <div className="btn btn-danger xoa"><i className="fa fa-delete    " />Sua</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default TableData;