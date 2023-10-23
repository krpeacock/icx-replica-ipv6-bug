# ICX Proxy Localhost error

Steps to reproduce:
* dfx 0.15.1 or more recent
* Node 18 or greater
* npm install
* dfx start --clean
* dfx deploy
* npm start

Verify that an error is thrown

This appears to be an IPv4 vs IPv6 issue, according to this thread: https://github.com/node-fetch/node-fetch/issues/1624

IPv6 support in the icx-proxy would be nice for anyone upgrading their node version.
