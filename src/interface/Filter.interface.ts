export default interface FilterInterface {
    breedsToFilter       : Array<string>;
    breedsToFilterSetter : Function
    zipCode              : Function;
    minAge               : Function;
    maxAge               : Function;
    sort                 : Function;
};