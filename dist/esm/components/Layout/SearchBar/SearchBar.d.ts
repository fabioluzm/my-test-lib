import { Dispatch, SetStateAction } from "react";
interface ISearchBar {
    alwaysOpen?: boolean;
    smallVersion?: boolean;
    setTerm: Dispatch<SetStateAction<string>>;
    term: string;
    detectChangeAndClearInput?: number | string;
    placeholder: string;
}
declare function SearchBar({ alwaysOpen, smallVersion, setTerm, term, detectChangeAndClearInput, placeholder }: ISearchBar): JSX.Element;
export default SearchBar;
//# sourceMappingURL=SearchBar.d.ts.map