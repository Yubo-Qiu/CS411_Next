import axios from 'axios';

const fetchNewsData = async () => {
    const apiKey = 'b12b5a095fbb4eee9988823cf8e7961a';
    const url = 'https://newsapi.org/v2/top-headlines';

    console.log("Calling fetchNewsData");
    try {
        // const response = await axios.get(url, {
        //     params: {
        //         apiKey: apiKey,
        //         country: 'us',
        //     },
        // });
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

        if (!response.status === 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log(response.data)
    


        return response.data.articles.slice(0,10); // Return the data
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error; // Rethrow the error
    }
}

export default fetchNewsData;