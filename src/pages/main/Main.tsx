import { ReactElement } from "react";
import SearchPanel from "../../components/Search/SearchPanel";
import CardList from "../../components/App/CardList/CardList";

function Main(): ReactElement{
    return (
        <>
            <SearchPanel />
            <CardList />
        </>
    )
}

export default Main;