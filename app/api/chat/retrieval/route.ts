import {NextRequest, NextResponse} from "next/server";
import { ChromaClient } from "chromadb";

/**
 * This handler initializes and calls a retrieval chain. It composes the chain using
 * LangChain Expression Language. See the docs for more information:
 *
 * https://js.langchain.com/docs/guides/expression_language/cookbook#conversational-retrieval-chain
 */
export async function POST(req: NextRequest) {
    try {

        //check if next ssr
        if (typeof window === "undefined") {

            const chroma = new ChromaClient({ path: "http://localhost:8000" });

            console.log({chroma})

            return true


        }

    } catch (e: any) {
        console.log({e});
        return NextResponse.json({error: e.message}, {status: 500});
    }
}