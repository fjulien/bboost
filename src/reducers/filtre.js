let initialState = {
    categorie: "",
};

const filtre = (state = initialState, action) => {
    switch (action.type) {
        case 'GETCATEGORIE':
            return {
                categorie: action.categorie,
            }
        default:
            return state;
    };
}
export default filtre;