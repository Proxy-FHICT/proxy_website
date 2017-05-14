# proxy_website
the proxy website redesign assignment. will be made public when ready  

## to get started:
do not forget to run `npm install` when starting with this project  
  
the website is built using VueJS
all the operations should be done via a command line, while in the `proxy-vue` directory  
the development can be run with `npm run dev` command
if you would like to see how the production version would look like run the following: 

```
> npm run build
> node_modules/http-server/bin/http-server .
```

this works, since http-server is added to the development dependencies in the `package.json`
the local host should be started in the **proxy-vue** of the project  


## filestructure:  
- `proxy-vue` -- used for development of the website using VueJS
    - `dist` -- where the built website js resides (added after `npm run build` command)
    - `skeleton-css` -- the css framework in use
    - `src` -- the place where the components reside
    - `stylesheets` -- for the custom styles
- `globals` -- some global assets
- `pages` -- the directory where some trials were made
- `.` -- the root. contains the package.json and other stuff