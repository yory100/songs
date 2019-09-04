import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:50' },
        { title: 'Macarena', duration: '3:50' },
        { title: 'All Star', duration: '2:50' },
        { title: 'I want it That Way', duration: '5:50' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})

