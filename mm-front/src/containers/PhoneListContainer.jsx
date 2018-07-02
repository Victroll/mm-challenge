import React from 'react';
import { connect } from 'react-redux';
import PhoneDetailComponent from '../components/PhoneDetailComponent';

class PhoneListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listComponents: props.phonesData.map((phoneDetail, i) => 
                <PhoneDetailComponent
                key={ phoneDetail.id }
                data={ phoneDetail }
                order={ i <= props.itemsInScreen ? i : -1 } />
            )
        }
    }

    render() {
        return(
            <ul className={ `phone-list ${this.props.anim}`}>
                { this.state.listComponents }
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        phonesData: state.phonesData,
        favs: state.favs,
        itemsInScreen: state.itemsInScreen,
        anim: `${state.anim.listItem}`
    };
}

export default connect(
    mapStateToProps
)(PhoneListContainer);