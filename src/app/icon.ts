export interface Icon {
    id: number;    //Currently unused, but if I move icons to service/db we'll need a PK
    title: string; //Tooltip
    link: string;  //Href Link 
    class: string; //Which font-awesome icon to use
    style: string; //Which font-awesome style the icon comes from (fa = Regular, fab = Brand, fas = Solid)
}