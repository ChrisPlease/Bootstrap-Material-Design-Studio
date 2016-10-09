import React from 'react';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = { count: 0, loads: true};
    }
    increment(id) {
        if (this.state.count < 100) {
            this.setState({
                count: this.state.count + 25
            });
        } else {
            this.setState({
                loads: false
            });
            clearInterval(id);
        }
    }
    componentDidMount() {
        var id = window.setInterval(function() {
            this.increment(id);
        }.bind(this), 300);
    }
    render() {
        return (
            <div>
                <div className='bs-component'>
                    <div className='navbar navbar-inverse' style={{marginBottom: '0px'}}>
                        <div className='container-fluid'>
                            <div className='navbar-header'>
                                <button type='button' className='navbar-toggle' data-toggle='collapse'
                                        data-target='.navbar-inverse-collapse'>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                    <span className='icon-bar'></span>
                                </button>
                                <a className='navbar-brand' href='javascript:void(0)'>Bootstrap Studio</a>
                            </div>
                            <div className='navbar-collapse collapse navbar-inverse-collapse'>
                                <ul className='nav navbar-nav'>
                                </ul>
                                <form className='navbar-form navbar-left'>
                                    <div className='form-group is-empty'>
                                        <input type='text' className='form-control col-md-8' placeholder='Search'/>
                                    </div>
                                </form>
                                <ul className='nav navbar-nav navbar-right'>
                                    <li><a href='javascript:void(0)'>Export</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id='source-button' className='btn btn-primary btn-xs' style={{'display': 'none'}}>&lt;
                        &gt;</div>
                    {
                        (this.state.loads) ?
                            <div className='progress'>
                                <div className='progress-bar progress-bar-danger'
                                     style={{width: this.state.count + '%' }}></div>
                            </div>
                            : <div> </div>
                    }
                </div>
            </div>
        );
    }
}
