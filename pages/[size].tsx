import Layout from "../components/layout/layout";
import {useRouter} from "next/router";
import GameTable from "../components/gameTable/gameTable";

export default function Size() {
    const router = useRouter();
    const params = router?.query;
    const size = parseInt(params?.size as string);

    return (
        <Layout>
            <GameTable size={size} />
        </Layout>
    )
}
