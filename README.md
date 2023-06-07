
# City Weather Information Project

This project aims to provide information about the weather in a specific city. It utilizes the OpenWeather API to retrieve real-time data on temperature, weather conditions, and humidity for the city specified by the user.

## References

 - [OpenWeather API website](https://openweathermap.org/current#name)


## API Documentation

### Built-in API request by city name

You can call by city name or city name, state code and country code.

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

### Units of measurement

Standard, metric, and imperial units are available. List of all API parameters with available units.

#### Parameters
Units, standard, metric, imperial. When you do not use the units parameter, format is standard by default.
Temperature is available in Fahrenheit, Celsius and Kelvin units.

For temperature in Fahrenheit use units=imperial
For temperature in Celsius use units=metric
Temperature in Kelvin is used by default, no need to use units parameter in API call

https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric

### Multilingual support

You can use the lang parameter to get the output in your language.

Translation is applied for the city name and description fields.

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&lang={lang}
## Features

#### City Query: 
The project allows the user to enter the name of a city in the search field to retrieve the corresponding weather information.
#### Real-Time Data: 
Utilizing the OpenWeather API, the project fetches up-to-date information on temperature, weather conditions (sunny, rainy, cloudy, etc.), and humidity for the specified city.
#### User-Friendly Interface: 
The project's interface is intuitive and easy to use, enabling users to quickly obtain the desired weather information.
#### Responsive Design: 
The project is compatible with mobile devices, allowing users to conveniently access weather information on their smartphones or tablets.
## Learnings

These were some of the learnings I obtained while developing this project:


### 1 - API Integration: 
I learned how to integrate external services into my project, using the OpenWeather API. It was interesting to work with HTTP requests, handle responses in JSON format, and extract relevant data for display in the application.

### 2 - User Input Handling: 
I learned how to capture and validate user input, ensuring that the city name was provided correctly. 

### 3 - Error Handling: 
During development, I encountered errors when making API calls or processing the returned data. I learned how to handle them and making everything to work.

### 4 - UI/UX: 
I had the opportunity to practice and improve my skills in user interface (UI) and user experience (UX) design while creating the project's interface. It was important to create an intuitive and user-friendly interface that made it easy to view the weather information.



I enjoyed every step of the learning process and constantly sought new knowledge and skills. It was an enriching and rewarding experience.



## Demonstration


https://figuerarj.github.io/clima_tempo_api/

Link to access the final version of the app.
## Screenshot

![App Screenshot](https://github.com/figuerarj/clima_tempo_api/blob/main/img_project_climate.jpg?raw=true)

