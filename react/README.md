### Create a new react app

https://github.com/iamshaunjp/Complete-React-Tutorial

```
# create-react-app is deprecated
npx create-react-app app-name
```

### JSON server
```
# Install + start JSON server
npx json-server --watch data/db.json --port 8000
```

### React router
```
npm install react-router-dom
```


```
# Installing and using Vite
npm install vite @vitejs/plugin-react --save-dev

# Vite guide
https://www.robinwieruch.de/vite-create-react-app/
```

```
# With Vite, add to package.json:
"scripts": {
  "start": "vite",
  "build": "vite build",
  "serve": "vite preview"
},
```


### Start app
```
cd app-name
npm start
```



### Tips
If code is executed twice (like console.log), check if the app is in StrictMode:
```
  <React.StrictMode>
    <App />
  </React.StrictMode>
```

