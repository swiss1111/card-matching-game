import Layout from "../components/layout/layout";
import {useRouter} from "next/router";
import GameTable from "../components/gameTable/gameTable";
import {ReactNode, useState} from "react";
import DeckSizeDropDown from "../components/deckSizeDropDown/deckSizeDropDown";
import Button from "../components/button/button";

export default function Size() {
    const router = useRouter();
    const params = router?.query;
    const size = parseInt(params?.size as string);

    const [deckSize, setDeckSize] = useState(size);

    function restart():void {
        router.push(`/${deckSize}`);
    }

    function changeDeckSize(size: number):void {
        setDeckSize(size);
    }

    function centerSection():ReactNode {
        return (
            <div>
                <DeckSizeDropDown size={deckSize} onSelect={changeDeckSize}/>
                <Button onClick={restart} title="Restart" />
            </div>
        )
    }

    return (
        <Layout centerSection={centerSection()}>
            <GameTable size={size} />
        </Layout>
    )
}
