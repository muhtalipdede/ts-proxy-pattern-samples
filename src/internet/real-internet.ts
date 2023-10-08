import Internet from "./internet";

class RealInternet implements Internet {
    connectTo(url: string): void {
        console.log(`Connecting to ${url}`);
    }
}

export default RealInternet;