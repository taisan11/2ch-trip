import { createTrip } from "./src/index.ts";

async function main() {
    // 12 digits trip
    console.log(await createTrip('#N.T.Technology')); // -> ' ◆FG0WWassNUrw'
    console.log(await createTrip('#パケットモンスター')); // -> ' ◆EZSPRAHOnqfS'
}
main()