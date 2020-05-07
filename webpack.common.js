const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js",
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },

                   {
                       loader: "css-loader"
                   }
               ]
           },

           {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
           }
       ]
   },
   
   plugins: [
       new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, 'src/template.html')
       }),

       new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, 'src/img'),
            to: path.resolve(__dirname, 'dist/img')
        }
       ])
   ]
};