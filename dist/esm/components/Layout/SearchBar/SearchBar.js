/* eslint-disable react-hooks/exhaustive-deps */
import { BoxSearchBar, SearchBarOpenedInput } from "./styles/SearchBarStyles";
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import React from "react";
function SearchBar(_a) {
    var alwaysOpen = _a.alwaysOpen, smallVersion = _a.smallVersion, setTerm = _a.setTerm, term = _a.term, detectChangeAndClearInput = _a.detectChangeAndClearInput, placeholder = _a.placeholder;
    var inputRef = useRef(null);
    var _b = useState(alwaysOpen), expandedSearchBar = _b[0], setExpandedSearchBar = _b[1];
    function changeExpandedSearchbarState() {
        if (!alwaysOpen)
            setExpandedSearchBar(!expandedSearchBar);
    }
    //se tiver alguma coisa escrita, mantem a searchbar aberta
    useEffect(function () {
        if (!alwaysOpen) {
            if (term.length >= 1)
                setExpandedSearchBar(true);
        }
    }, [term.length]);
    //TODO: rever se faz sentido ter isto, para limpar o input, caso seja necessário
    //basta enviar o valor que ao mudar de estado vai limpar o input
    //é a forma mais clean de chamar uma função do child no parent sem o useImperative
    //sempre que for necessário limpar o input
    useEffect(function () {
        if (detectChangeAndClearInput !== undefined) {
            setTerm("");
            if (inputRef.current)
                inputRef.current.value = "";
        }
    }, [detectChangeAndClearInput]); //variavel que se cujo valor alterar, limpa o input (útil para o mapa na dashboard, ao trocar de gtw)
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { sx: { textAlign: 'end' } }, !expandedSearchBar ?
            React.createElement(IconButton, { size: smallVersion ? 'small' : 'medium', className: "contrast", title: placeholder, onClick: changeExpandedSearchbarState },
                React.createElement(SearchIcon, null))
            :
                React.createElement(BoxSearchBar, null,
                    React.createElement(SearchBarOpenedInput, { inputRef: inputRef, placeholder: placeholder, onChange: function (event) { setTerm(event.target.value); }, defaultValue: term }),
                    React.createElement(IconButton, { size: smallVersion ? 'small' : 'medium', className: "contrast noShadow", disabled: alwaysOpen, onClick: function () { !alwaysOpen && changeExpandedSearchbarState(); } },
                        React.createElement(SearchIcon, null))))));
}
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map