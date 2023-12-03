'use strict';
import axios from 'axios';

// Function to fetch stock data
const fetchStockData = async (symbol) => {
  const apiKey = 'A5X3M7M8EJ6YL5LD';
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.data; // Return the parsed JSON data
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error; // Rethrow the error for caller to handle
  }
};

export default fetchStockData;
