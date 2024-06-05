const KEY = 'e9b863bca248d4d2f151ea203ba0ce53'

const getDate = async (city) => {
    const bace = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${KEY}`

    const req = await fetch(bace + query)
    const data = await req.json()
    return data
}