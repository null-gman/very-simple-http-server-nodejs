
when i started studying **back-end** with [nodejs](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://nodejs.org/en&ved=2ahUKEwizzuGLuqOMAxVz9LsIHcmBOoAQFnoECAkQAQ&usg=AOvVaw1dFXYHr5kNGMvANfSjX4lC) i hated it , why ? because most the tutorial out there using [express js](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://expressjs.com/&ved=2ahUKEwj84M37uqOMAxXmg_0HHQuzKYIQFnoECAsQAQ&usg=AOvVaw2dzc6U9bu173R4s1d9BYhT) , then why this was a problem ? .

My philosophy in computer science is to level up in abstraction form bottom to the top, meaning do not learn [React](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://react.dev/&ved=2ahUKEwi4r9v9u6OMAxX_gf0HHdYCLUoQFnoECA4QAQ&usg=AOvVaw1tEjYYiD7LQlxO53dgjTHV) before mastering basic web technologies (HTML, CSS, JavaScript). while most back-end tutorial in [nodejs](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://nodejs.org/en&ved=2ahUKEwizzuGLuqOMAxVz9LsIHcmBOoAQFnoECAkQAQ&usg=AOvVaw1dFXYHr5kNGMvANfSjX4lC) do the Opposite . 

so i tried to learn by my own with **docs** for networks , back-end  and  [nodejs api](https://nodejs.org/docs/latest/api/)  , also some tutorial on YouTube or blogs .

in this repo i wanted to create a simple **http-server** that serve static website for simple usage and to build on top of it (don't reinvent the wheel) with simple functions without using any  **npm packages** , and to be for learning purposes .

> Even though I am still a beginner, there may be some issues or mistakes. Please contribute to the project or report them in the issue section.

# usage
1. you have  [nodejs](https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://nodejs.org/en&ved=2ahUKEwizzuGLuqOMAxVz9LsIHcmBOoAQFnoECAkQAQ&usg=AOvVaw1dFXYHr5kNGMvANfSjX4lC) already !!
2. create the website folder like the `/frontEnd`  to be the root for all your pages .
3. Run: `npm main.js` This will automatically look for a folder named `frontEnd` in the current working directory. If this is not the case, use the `-root` flag to specify a different directory.  
> Pass `-root .` to serve the current directory as the website root.
## issues may you run into
1. This is in **GNU/Linux**, and to solve it, use `sudo`. If you're on Windows, run the terminal you use as an administrator.
![image](https://github.com/user-attachments/assets/47b3067a-bc3f-4917-a152-a6317196693b)

2. This error message means that the port you're using for the server on your IPv4 (port 80) is already in use. To solve it, close the other service that is using that port or change the port the server uses in `/main.js`.
![image](https://github.com/user-attachments/assets/d2252a99-95bd-42d9-aab2-e64b0ab11728)

**in main.js**
```js
const HostInfo = {ip : undefined , port :undefined};
HostInfo.ip = getIpv4();
HostInfo.port = 80; /*change the port number and check if it free*/
```

