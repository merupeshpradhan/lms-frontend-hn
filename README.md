# LMS frontend

### Setup instruction

1. Clone the project

```
    git clone https://github.com/merupeshpradhan/lms-frontend-hn.git
```

2. Move into the directory

```
    cd lms-frontend-hn
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```

### Setup instructions for tailwind css

- Searching This was and install all

```
1 -> https://tailwindcss.com/docs/installation
2 -> https://tailwindcss.com/docs/guides/vite
```

[Tail wind oficial instruction doc](https://tailwindcss.com/docs/installation)

1. Install tailwindcss

```
    npm install -D tailwindcss postcss autoprefixer 
    
    -> (this is perfect for installation)
```

2. Create tailwind config file

```
    2.a -> npx tailwindcss init
    
    2.b -> { npx tailwindcss init -p }
```

3. Add file extension to tailwind config file in the contents property

```
    content: [
        "./index.html",
        "./src/**/*. {html,js,jsx,ts,tsx}"
    ]
    -> (this 
    is perfect for adding)
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

5. Add the following details in the plugin property of tainwind config

```
plugins: [require("daisyui"),require("@tailwindcss/line-clamp")]
```

### Adding plugins and dependenciess

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2
    chart.js daisyui axios
    react-hot-toast @tailwindcss/line-clamp
```

### Adding plugins and dependenciess

1. install simple imoprt sore

```
    npm i -D eslint-plugin-simple-import-sort
```

2. Add rule om `.eslint.cjs`

```
    'simple-import-sort/imports': 'error'
```

3. add simple-import sort plugin in `.eslint.cjs`

```
    plugin: [...,'simple-import-sort']
```

4.To enable auto import sort on file save in vscode

    - Open `settings.json`
    - add the following config

```
"editor.codeActionsOnSave":{
    "source.fixAll.eslint":true
}
```
