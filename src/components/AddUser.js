import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiChinhSua : false
  }
}

kiemtraTrangThai = () => {
  if(this.props.hienThiForm === true) {
    return (<div className="card border-primary mb-3 mt-2">
        <div className="card-header">Them Moi User</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" className="form-control"  placeholder="User name" />                                                
          </div>
          <div className="form-group">
            <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" className="form-control"  placeholder="Dien Thoai" />                                                
          </div>
          <div className="form-group">
            <select className="custom-select" required>
              <option value>Chon Quyen Mac Dinh</option>
              <option value={1}>Admin</option>
              <option value={2}>Moder</option>
              <option value={3}>Normal</option>
            </select>
            <div className="invalid-feedback">Example invalid custom select feedback</div>
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-primary"> Them Moi</button>  
          </div>
        </div>
      </div>);
}
}

// thayDoiTrangThai = () => {
//   this.setState({
//     trangThaiChinhSua:!this.state.trangThaiChinhSua
//   });
// }
//   hienThiNut = () =>{
//     if (this.state.trangThaiChinhSua === true) {
//         return <div className="btn btn-block btn-outline-secondary" onClick ={() => this.thayDoiTrangThai()}>Dong Lai</div>;
//     } else {
//       return   <div className="btn btn-block btn-outline-info" onClick ={() => this.thayDoiTrangThai()}>them moi</div>;
//     }
//   }

//   hienThiForm = () => {
//     if (this.state.trangThaiChinhSua === true) {
//       return (
//         <div className="card border-primary mb-3 mt-2">
//         <div className="card-header">Them Moi User</div>
//         <div className="card-body text-primary">
//           <div className="form-group">
//             <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" className="form-control"  placeholder="User name" />                                                
//           </div>
//           <div className="form-group">
//             <input type="text|password|email|number|submit|date|datetime|datetime-local|month|color|range|search|tel|time|url|week" className="form-control"  placeholder="Dien Thoai" />                                                
//           </div>
//           <div className="form-group">
//             <select className="custom-select" required>
//               <option value>Chon Quyen Mac Dinh</option>
//               <option value={1}>Admin</option>
//               <option value={2}>Moder</option>
//               <option value={3}>Normal</option>
//             </select>
//             <div className="invalid-feedback">Example invalid custom select feedback</div>
//           </div>
//           <div className="form-group">
//             <button className="btn btn-block btn-primary"> Them Moi</button>  
//           </div>
//         </div>
//       </div>
//       )
//   }
//   }

    render() {
        return (
            <div className="col-3">
    {/* {this.hienThiNut()} */}
          {/* {this.hienThiForm()} */}
          
  </div>

        );
    }
}

export default AddUser;