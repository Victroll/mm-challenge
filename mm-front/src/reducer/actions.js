import * as Types from './constants';

export function toggleFav(id) {
    return {
        type: Types.TOGGLE_FAV,
        id: id
    };
}

export function moveToDetailedView(id) {
    return {
        type: Types.MOVE_TO_DETAILED_VIEW,
        id: id
    };
}

export function moveToListView() {
    return {
        type: Types.MOVE_TO_LIST_VIEW
    };
}