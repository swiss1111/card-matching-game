import Layout from "../components/layout/layout";
import DeckSizeDropDown from "../components/deckSizeDropDown/deckSizeDropDown";
import Button from "../components/button/button";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Game() {
    const router = useRouter()

    const [deckSize, setDeckSize] = useState(6);

    function newGame():void {
            router.push(`/${deckSize}`);
    }

    function changeDeckSize(size: number):void {
        setDeckSize(size);
    }

    return (
        <Layout home>
            <h2>Splendex Memory Game</h2>
            <DeckSizeDropDown size={deckSize} onSelect={changeDeckSize}/>
            <Button onClick={newGame} title="Start new game" />
        </Layout>
    )
}
