import React from 'react';
import { connect } from 'react-redux';
import { toggleFav } from '../reducer/actions';

class FooterIconsComponent extends React.Component {
    constructor() {
        super();

        this.toggleFav = this.toggleFav.bind(this);
    }

    toggleFav() {
        this.props.toggleFav(this.props.id);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.fav !== nextProps.fav;
    }

    render() {
        return (
            <section className='footer'>
                { this.props.fav ? 
                    <button className="fas fa-star" onClick={ this.toggleFav } ></button> :
                    <button className="far fa-star" onClick={ this.toggleFav }></button>
                }
                <h2>{ `Price: ${ this.props.price }€` }</h2>
                <section className='icons'>
                    <a href={ `https://www.facebook.com/sharer/sharer.php?u=MasMovilChallenge/${ this.props.id }` } target='_blank'>
                        <i className='fab fa-facebook-square'></i>
                    </a>
                    <a href={ `http://twitter.com/share?url=MasMovilChallenge/${ this.props.id }` } target='_blank'>
                        <i className='fab fa-twitter-square'></i>
                    </a>
                </section>
            </section>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        fav: state.favs.includes(props.id)
    };
}

const mapDispatchToProps = dispatch => {
    return {
        toggleFav: (id) => dispatch(toggleFav(id))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FooterIconsComponent);