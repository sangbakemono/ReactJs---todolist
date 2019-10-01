import React, { Component } from 'react';

class FormQL extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý thông tin</h1>
                    <hr />
                </div> 
                {/*Form*/}               
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">                   
                    <div className="panel panel-warning">
                          <div className="panel-heading">
                                <h3 className="panel-title">Thêm công việc</h3>
                          </div>
                          <div className="panel-body">                       
                                <form>                                
                                    <div className="form-group">
                                        <label for="">tên: </label>
                                        <input type="text" className="form-control" id="" placeholder="Input field" />
                                    </div>
                                    <label>trạng thái</label>                                   
                                    <select name="status" className="form-control">
                                        <option value="true">ẩn</option>
                                        <option value="false">kích hoạt</option>
                                    </select>
                                    <br />                                    
                                    <button type="button" className="btn btn-primary">Lưu</button>&nbsp;                                   
                                    <button type="button" className="btn btn-danger">Hủy</button>                                 
                                </form>                                
                          </div>
                    </div>                   
                </div>
                {/*Search -sort*/}
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">                    
                    <button type="button" className="btn btn-primary">Thêm công việc</button>                    
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">                               
                                <input type="search" name="" id="input" className="form-control" value="" required="required" title="" /> 
                                <span className="input-group-btn">
                                    <button type="button" className="btn btn-primary">Tìm</button>
                                </span>                                                                                              
                            </div>                            
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            
                        </div>
                    </div>
                    
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>stt</th>
                                <th>tên</th>
                                <th>trạng thái</th>
                                <th>Hoạt động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>                                 
                                 <input type="text"  className="form-control" value="" />                             
                                </td>
                                <td>
                                    
                                    <select className="form-control" required="required">
                                        <option value="true">tất cả</option>
                                        <option value="false">ẩn</option>
                                        <option value="false">kích hoạt</option>
                                    </select>
                                    
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>iphone 8</td>
                                <td>                                   
                                    <span className="label label-danger">ẩn</span>                                   
                                </td>
                                <td>
                                    
                                    <button type="button" className="btn btn-warning">Sữa</button>
                                    
                                    <button type="button" className="btn btn-danger">Xóa</button>
                                    
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>               
            </div>
        );
    }
}

export default FormQL;