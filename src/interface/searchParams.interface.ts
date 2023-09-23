export default interface SearchParamsInterface {
    breedsToFilter       : Array<string>;
    zipCode              : Array<string>;
    minAge               : number | undefined;
    maxAge               : number | undefined;
    sort                 : string;
};