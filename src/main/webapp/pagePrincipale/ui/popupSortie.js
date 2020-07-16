export const popupSortie = new class popupSortieClass{

    get configuration(){
        return{
            view: "popup",
            label: "Examen : N/A",
            id:"popupSortieId",
            hidden:false,
            body:{
                template:"Some text"
            }
        }
    }
}

