# ms-graph-accesstoken
node.js command line program of use microsoft graph by access token.

## Quick Start

## About Device code flow

### 1.get the accessToken by MSAL (use java or .net or python)

Use [MSAL for Java (MSAL4J)](https://github.com/AzureAD/microsoft-authentication-library-for-java)

reference 

- [Microsoft identity platform (v2.0) overview](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-overview)
- [Microsoft Authentication Library (MSAL)](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview) 
- [Microsoft identity platform code samples (v2.0 endpoint)](https://docs.microsoft.com/en-us/azure/active-directory/develop/sample-v2-code) 

why not use [azure-activedirectory-library-for-nodejs] to get the accessToken? 

    1. It can not use. It has a open issue. 
      https://github.com/AzureAD/azure-activedirectory-library-for-nodejs/issues/215 

    2. It is not recommend. 
      [answer of jmckennon commented on 17 Dec 2019](https://github.com/AzureAD/azure-activedirectory-library-for-nodejs/issues/199) 
      [MSAL.JS Roadmap](https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki) 

why not use node.js? 
* Current MSAL is not support node.js. 

### 2. use graph client to get the calendar events by accessToken.  (use node.js or java)
  node.js command line program 
    https://github.com/royrliu/ms-graph-accesstoken 

  reference of node.js 
    [Build Node.js Express apps with Microsoft Graph](https://github.com/microsoftgraph/msgraph-training-nodeexpressapp/tree/master/Demos/03-add-msgraph) 
  
  reference of node.js 
    [msgraph-training-java](https://github.com/microsoftgraph/msgraph-training-java/tree/master/demos/03-add-msgraph/graphtutorial) 

### Installation

``` $ npm install ``` 

``` paste access toke into index.js ``` 

``` $ npm start ``` 