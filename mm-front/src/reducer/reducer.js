import * as Types from './constants';

export default function(state, action) {
    var newFavs = [];
    switch (action.type) {
        case Types.TOGGLE_FAV:
            let index = state.favs.indexOf(action.id);
            newFavs = [...state.favs];
            if (index === -1)
                newFavs.push(action.id);
            else 
                newFavs.splice(index, 1)

            window.localStorage.setItem('mm_challenge_favs', JSON.stringify(newFavs));

            return {...state,
                favs: newFavs
            };
        case Types.MOVE_TO_DETAILED_VIEW:
            return {...state,
                anim: {...state.anim,
                    listItem: 'slide-to-left-list',
                    detailedView: 'slide-to-left-detail'
                },
                detailedView: {...state.detailedView,
                    id: action.id,
                    visible: true
                }
            };
        case Types.MOVE_TO_LIST_VIEW:
            return {...state,
                anim: {...state.anim,
                    listItem: 'slide-to-right-list',
                    detailedView: 'slide-to-right-detail'
                },
                detailedView: {...state.detailedView,
                    visible: false
                }
            };
        default:
            return state;
    }
}