import React from 'react';
import { connect } from 'react-redux';
import { moveToDetailedView } from '../reducer/actions';
import FooterIconsComponent from './FooterIconsComponent';

class PhoneDetailComponent extends React.Component {
    constructor() {
        super();

        this.moveToDetailedView = this.moveToDetailedView.bind(this);
    }

    moveToDetailedView() {
        this.props.moveToDetailedView(this.props.data.id);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.anim !== nextProps.anim
            || this.props.order !== nextProps.order;
    }

    render() {
        return (
            <li id={ `phone-detail-${this.props.data.id}` } 
            className='phone-detail' >
                <button className='mobile-img' onClick={ this.moveToDetailedView } >
                    <img height={100}
                    width={100}
                    alt={ this.props.data.name }
                    src={ `http://localhost:3210/phones/${this.props.data.img}` } />
                </button>
                <section className='detail-text'>
                    <h1>{ this.props.data.name }</h1>
                    <p>{ this.props.data.desc }</p>
                    <FooterIconsComponent 
                    price={ this.props.data.price }
                    id={ this.props.data.id } />
                </section>
            </li>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        moveToDetailedView: (id) =>dispatch(moveToDetailedView(id))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(PhoneDetailComponent);