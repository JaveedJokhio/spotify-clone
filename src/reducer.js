export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQCQjLxe90KwlNFxMdO6Tiv_Nbq0P2jUkhaT98PblWP4WyqaV5DSLtSTXjiVzTti8ANqoUQ7INRhzrNDZ7alBhb5-ZUOHpHwTTY5hIEvgQI2Oi84lFCA256HL3f8AmlIjLnksODh2zuyjfDWLzkf8nfjf_c1Xi5olFrC05wSNSlCqjQWhzVjPw3BzES_WTQ3KsgWN9Fg8ut6nVopzr7V',
};

const reducer=(state,action)=>{
    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };
            default:
                return state;
    }

}
export default reducer;