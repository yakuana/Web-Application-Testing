import React from 'react';   // import react 

//import * as rtl from '@testing-library/react';             // import all of the react testing library as rtl 

import { render, fireEvent } from '@testing-library/react';  // import {render, fireEvent} react testing library 
import "@testing-library/jest-dom/extend-expect";            // import extend and expect from jest-dom  
import "@testing-library/react/cleanup-after-each";          // import clean up 

import Dashboard from "./Dashboard.js";                      // import your components 


describe("<Dashboard /> Tests", () => {
    
    it("adds one to strike", () => {

        const { getByTestId } = render(<Dashboard />);

        fireEvent.click(getByTestId("strikeButton"));

        expect(getByTestId("strikeNum")).toHaveTextContent(/Strike: 1/i);
    })

})