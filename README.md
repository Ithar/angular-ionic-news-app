# angular-ionic-news-app
News app for Android/ iOS 

#### Features 
- News API 
- Filtering
- Sqlite storage

## 

## Application Stack

Stack  | version |
--- | --- |  
*Frontend* | Angular 10.0.12
*Node* | v12.18.1
*Hosting* | 
*Build Tool* | Ionic CLI (5.4.16)
*CI* | n/a 
*Code Coverage* | n/a

## Prerequisite 
- node
- npm
- Angular CLI
- Ionic CLI 
- Cordova 10.0.0

#### NPM Packages
```
npm i -g ionic cordova

```

## Application Build 
```
ionic start onews --type=angular
> Starter template: sidemenu

cd onews

ionic lab

ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic/storage

```

## Application Components 
```
ionic g service service/news-api
ionic g service service/toast-message

ionic g page article-details
ionic g page publishers
ionic g page publiser-news
```

## Application Run/Build
```
cd onews 
ionic serve

ionic build --prod
```

## Application Deploy
```

```

## Application URL
LocaL : http://localhost:8100

Labs  : http://localhost:8200  


## Further enhancements 
- Read full Article  
- News provider slider 
- Share component for news card
- Limit favorites
- Make favorites dynamic 
- Make favorites clickable




-----------

![Home](preview/1.Home.png)