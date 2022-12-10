<div align="center">

# **Crawling-for-dummies**
a chrome-addons that allows user-friendly approach to web crawling.


 [website→](https://backgroundjun.github.io/Crawling-for-dummies/)

</div>

## Problem Statement

   Crawlers that currently exist are hardly accessible and require professional coding, making it difficult for non-major to use.  
   In addition, the existing crawler program has the disadvantage that it is difficult to grasp at once because the UI is not intuitive. Therefore, we want to improve UI and UX so that users who have nothing to do with coding can easily use crawling programs.


## Mission Statement

  - Crawling-for-dummies develops open-source software for web crawling service.

  - Crawling-for-dummies is a chrome-addons that allows user-friendly approach to web crawling. 

  - It is design to easy-to-use software that can be used with little knowledge.
Features List:

  - Ability to extract a specific elements using the element inspection tool

  - Ability to select a selector when a mouse click event occurs on an element

  - Ability to select the desired elements from the entire DOM with a javascript selector (href, innertext, etc.)

  - Ability to list selected elements and extract them as excel, json, csv file.

  -	Selects elements from webpage view

  -	Extracts data from selected elements (.csv, .json)

  -	Supports multi-page crawling feature


## What is web crawling?
Web crawling is the process of indexing information on a website using automated scripts or programs. These programs are called by various names, including Web crawlers, Spider, Spider-bot, and Crawlers.


## Why web crawling is IMPORTANT?
In 2013, IBM announced that approximately 90% of the world’s data was generated in the last two years and that the rate of data generation doubled every two years. However, most data is unstructured and Web crawlers index vast amounts of unstructured data to help search engines find the information they want to find. Indexed data also plays an important role in various fields - data science projects.


## In our project…
Crawlers that currently exist are hardly accessible and require professional coding, making it difficult for non-major to use. In addition, the existing crawler program has the disadvantage that it is difficult to grasp at once because the UI is not intuitive. Therefore, we want to improve UI and UX so that users who have nothing to do with coding can easily use crawling programs.


 ## Target Development Language
  -	Technology stack: Node.js, Manifest V3

  -	Supports Windows 10 / Mac OS Environment

  -	dependency manager: Yarn, NPM

  -	development tool: VSCode, Chrome

  -	version control system: Git, Docker

  -	project management tool: discord, notion

  -	project document: read the docs

  -	Enough disk space to hold the crawling data

## How to install

1. Download **_Crawling-for-Dummies_** from our Github page, website, or [click here to download](https://github.com/backgroundjun/Crawling-for-dummies/archive/refs/tags/v1.0.0.zip), and unpack.

2. At **Chrome browser**, Visit the **Chrome Extension Setting** or paste __chrome://extensions/__ at address bar
   - you can find **Chrome Extension Setting** at **3 dots** at right side of address bar > **More tools** > **Extension**
3. Turn on **Developer mode** feature at top right
4. Click **Load unpacked** button at top left
5. Select **src** folder from the download file
6. If **_Crawling-for-Dummies_** is added, you are good to go!

## How to use

1. Go to the page that you want to get data
2. Click puzzle-shaped button called **extension** at the right side of address bar
3. Select **Crawling-for-Dummies** and the pop-up will appear
4. Turn on the **Selecting Mode** and click the element that you want
   
5. Paste the web page url to **URL** blank
   - If you want the data form *multiple pages*, Find the **"page="** or **"p="** in the URL, and changes the following number with **_{startingpage:lastpage}_** for example, {1:10} means from 1 to 10 pages
   
6. Click **CRAWL** button and Wait 
7. It will start to download the crawled data as **.json** file
   
## Member Introduction

- 	김남권(16011356)

- 	배경준(15011048)

- 	고민석(15011027)

-	황예원(19011705)
--- 
-	Development:  
김남권(16011356), 배경준 (15011048),  
고민석 (15011027), 황예원(19011705)

-	SCM ( git ) : 배경준(15011048)

-	Configuration (manifest, etc...) :  황예원(19011705)

-	CI/CD ( Docker, k8s ) :  고민석(15011027)

-	Documentation ( read the docs, markdown ) :  김남권(16011356)




## Contact 
<h3> Discord server </h3>

On the [Crawling-for-dummies Discord server](https://discord.gg/54m6XV6x), you can chat with members of the Crawling-for-dummies community in real time. You'll meet Crawling-for-dummies users, contributors, and developer advocates. This is a great place to stop in for quick questions or to share your latest Crawling-for-dummies discoveries.

<h3>Mailing list </h3>

Join the [Crawling-for-dummies mailing list](https://groups.google.com/g/crawling-for-dummies) to discuss the ongoing development of Crawling-for-dummies and to find out about new Crawling-for-dummies releases.


## License
This work is published under [Apache-2.0](https://github.com/backgroundjun/Crawling-for-dummies/blob/main/LICENSE) License.
