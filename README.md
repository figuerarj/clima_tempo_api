
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

## Enhancements

During the development of this city weather information project, I have implemented several enhancements to improve the user experience. Here are the main improvements made:

#### 1 - Floating Effect: 
I added a subtle floating effect to the application's interface, providing a more dynamic and pleasant feel to the user during interaction with the app.

#### 2 - Emphasis on Weather Condition: 
I further highlighted the information about the current weather condition. Now, the weather condition is prominently displayed, allowing the user to quickly obtain this essential information about the city's weather.

#### 3 - Customized Icons: 
I personalized the icons used in the application to visually represent different weather conditions. Now, the icons are more intuitive and help the user quickly identify the current weather situation.

#### 4 - Loading Implementation:

The loading effect is displayed as an animated element at the center of the screen, indicating that the content is being loaded. Once all the content is loaded, the loading effect is automatically hidden. This ensures a smooth transition between the loading phase and the display of the main content.

The loading implementation was done using HTML, CSS, and JavaScript. In the HTML file, a <div> element with the ID "preloader" was added, which contains an additional <div> element with the ID "loader" for the animation. CSS defines the appearance of the loading effect, while JavaScript is responsible for hiding the loading effect once the loading is complete.

This addition of the loading effect helps provide a more pleasant experience for users, visually informing them that the content is being loaded and preventing them from feeling frustrated or disoriented during this process.



These enhancements aim to make the user experience more enjoyable, intuitive, and efficient when using the city weather application. I hope these additions provide an even more pleasant and useful interaction for users.

## Demonstration


https://figuerarj.github.io/clima_tempo_api/

Link to access the final version of the app.

## Screenshot

![App Screenshot](https://github.com/figuerarj/clima_tempo_api/blob/main/img_project_climate.jpg?raw=true)

