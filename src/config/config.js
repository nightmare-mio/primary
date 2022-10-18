const ENV="dev";
if (NEV=="dev") {
    const baseURL = "http://127.0.0.1:8081";
} else if(NEV=="test") {
    const baseURL = "http://42.193.248.221:8081";
}

export { baseURL }