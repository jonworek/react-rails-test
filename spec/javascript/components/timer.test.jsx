import React from "react";
import ReactTestUtils from "react-addons-test-utils";

import Timer from "components/timer";

describe(Timer, ()=> {
    test("print", ()=> {
        let timer = new Timer();
        let output = (
            <li key="1">
                1
            </li>
        );

        expect(timer.print(1)).toEqual(output);
    });
});
