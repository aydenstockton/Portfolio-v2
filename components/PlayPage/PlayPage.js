import React from 'react';
import { CSSGrid, measureItems, makeResponsive } from 'react-stonecutter';
import InfiniteGrid, {GridLayout} from "@egjs/infinitegrid";
import PlayAPI from "../../PlayAPI";

const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 1920,
    minPadding: 100
});

class PlayPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = PlayAPI.all();

        document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

        return (
            <Grid>
                <div type={list.type}>{list.src}</div>
            </Grid>
        )
    };
}

export default PlayPage