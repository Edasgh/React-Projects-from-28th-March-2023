import mainLayOut from "@/Components/layout/main_LayOut";
import "@/styles/globals.css";
import "@/styles/main.scss";

export const myApp=({Component, pageProps})=>{
    <mainLayOut>
        <Component {...pageProps}/>
    </mainLayOut>
}