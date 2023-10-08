import Internet from "./internet/internet";
import InternetProxy from "./internet/internet-proxy";

const internet: Internet = new InternetProxy();

internet.connectTo("example.com");
internet.connectTo("blocked.com");
internet.connectTo("restricted.com"); 
