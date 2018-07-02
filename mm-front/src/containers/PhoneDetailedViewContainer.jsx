import React from 'react';
import { connect } from 'react-redux';
import { moveToListView } from '../reducer/actions';
import FooterIconsComponent from '../components/FooterIconsComponent';

class PhoneDetailedViewContainer extends React.Component {
    constructor() {
        super();

        this.moveToListView = this.moveToListView.bind(this);
    }

    moveToListView() {
        this.props.moveToListView();
    }

    shouldComponentUpdate(nextProps) {
        return this.props.visible !== nextProps.visible;
    }

    render() {
        return (
            this.props.data ? 
            <section className={ `detailed-view ${this.props.anim}`}>
                <img 
                alt={ this.props.data.name }
                src={ `http://localhost:3210/phones/${this.props.data.img}` }/>
                <h1>{ this.props.data.name }</h1>
                <p>{ this.props.data.desc }</p>
                <div className='separator' />
                <FooterIconsComponent 
                price={ this.props.data.price }
                id={ this.props.data.id } />                
                <button className='back-button' onClick={ this.moveToListView }>
                    <i className='fas fa-arrow-circle-left'></i>
                </button>
            </section> : null
        );
    }
}

const mapStateToProps = state => {
    return {
        visible: state.detailedView.visible,
        data: (state.detailedView.visible || state.detailedView.id !== -1) ?
            state.phonesData.find(data => data.id === state.detailedView.id)
            : null,
        anim: state.anim.detailedView,
        fav: state.favs.includes(state.detailedView.id)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        moveToListView: () => dispatch(moveToListView())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneDetailedViewContainer);