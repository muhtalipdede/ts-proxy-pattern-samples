# Proxy Design Pattern Example in TypeScript

This repository contains a TypeScript example of the Proxy design pattern. The Proxy pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it.

## Example: Internet Access Control

In this example, we have an `Internet` interface representing internet access, a `RealInternet` class that provides real internet access, and an `InternetProxy` class that acts as a proxy to control internet access. Certain websites are restricted, and the proxy checks the URL before allowing or blocking access.

