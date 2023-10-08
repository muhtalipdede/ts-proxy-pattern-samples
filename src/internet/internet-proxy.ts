import Internet from "./internet";
import RealInternet from "./real-internet";

class InternetProxy implements Internet {
    private realInternet: RealInternet = new RealInternet();
    private restrictedSites: string[] = ["blocked.com", "restricted.com"];

    connectTo(url: string): void {
        if (this.isSiteRestricted(url)) {
            console.log(`Access to ${url} is restricted.`);
        } else {
            this.realInternet.connectTo(url);
        }
    }

    private isSiteRestricted(url: string): boolean {
        return this.restrictedSites.includes(url);
    }
}

export default InternetProxy;