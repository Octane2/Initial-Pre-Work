# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Techtonic’s URL is entered into the browser, which then sends out a DNS lookup request, and checks for the IP address that corresponds to www.techtonic.com.  Once the URL is resolved into its corresponding IP address, a TCP connection is established with the server, and an HTTP request is then sent to the server.   The webserver installed on the server handles the HTTP request, and sends a reply back the client’s machine with the requested data.  The browser on the client’s machine then displays the requested web document or web page. 

## From start to finish, how does data reach you to be rendered in the browser?

I'm assuming this question is asking about the process in which the client sends a request to the server for data, and then server replies with the requested data.  If so, that process is outlined in the question above.  If not, I don't know, as I was not able to find an answer to this question. 

## What code is rendered in the browser?

HTML and CSS are rendered in the rendering engine.  JavaScript is rendered in the browser's dedicated JavaScript engine.  

## What is the server-side code’s main function?

The main function of the server side code is to faciliate the interactions with files and databases, processes input from the user
for user validation and page navigation for example. The server side code also saves and retrieves data.   


## What is the client-side code’s main function?

The main purpose of the client side code is to process the received data from the server side.  

## What is runtime?

Runtime is the span of time from when a program starts running until termination from the user or system.  Runtime is also commonly 
referred to as execution time.  

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I could not find a specific answer to this questions, but I would assume there would have to be at least one instance. 

## How many instances of the server-side code are available at any given time?

I could not find a specific answer for this question either, but again, I would assume that there would have to be at least one instance.

## How many instances of the databases connected to the server application are created?

I couldn't find an answer to this question, but I would think that at least one instance would be needed.  
