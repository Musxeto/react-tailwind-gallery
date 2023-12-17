const tailwind = require('tailwindcss');

module.exports = {
    plugins: [
        tailwind('./tailwind.js'),
        require('autoprefixer')
    ]
};
