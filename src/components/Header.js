import React from 'react';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className="bs-component">
                    <div className="navbar navbar-inverse" style={{marginBottom:'0px'}}>
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="javascript:void(0)">Brand</a>
                            </div>
                            <div className="navbar-collapse collapse navbar-inverse-collapse">
                                <ul className="nav navbar-nav">
                                    <li className="active"><a href="javascript:void(0)">Active</a></li>
                                    <li><a href="javascript:void(0)">Link</a></li>
                                    <li className="dropdown">
                                        <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                            <b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="javascript:void(0)">Action</a></li>
                                            <li><a href="javascript:void(0)">Another action</a></li>
                                            <li><a href="javascript:void(0)">Something else here</a></li>
                                            <li className="divider"></li>
                                            <li className="dropdown-header">Dropdown header</li>
                                            <li><a href="javascript:void(0)">Separated link</a></li>
                                            <li><a href="javascript:void(0)">One more separated link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="navbar-form navbar-left">
                                    <div className="form-group is-empty">
                                        <input type="text" className="form-control col-md-8" placeholder="Search"/>
                                    </div>
                                </form>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a href="javascript:void(0)">Link</a></li>
                                    <li className="dropdown">
                                        <a href="bootstrap-elements.html" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                            <b className="caret"></b></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="javascript:void(0)">Action</a></li>
                                            <li><a href="javascript:void(0)">Another action</a></li>
                                            <li><a href="javascript:void(0)">Something else here</a></li>
                                            <li className="divider"></li>
                                            <li><a href="javascript:void(0)">Separated link</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="source-button" className="btn btn-primary btn-xs" style={{"display": "none"}}>&lt; &gt;</div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-danger" style={{width: '20%'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
