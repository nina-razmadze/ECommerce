/** @type {import('tailwindcss').Config} \*/
export default {
content: [
'./index.html',
'./src/**/_.{js,ts,jsx,tsx}',
// './node_modules/flowbite/\*\*/_.js',
],
theme: {
extend: {},
},
plugins: [require('flowbite/plugin')],
};
