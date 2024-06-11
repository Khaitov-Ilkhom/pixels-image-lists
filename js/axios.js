const ins = axios.create({
    baseURL: "https://api.pexels.com",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : localStorage.getItem("key")
    },
    timeout: 10000
})

export default ins