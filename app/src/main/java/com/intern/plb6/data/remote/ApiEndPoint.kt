package com.intern.plb6.data.remote

import com.intern.plb6.BuildConfig

object ApiEndPoint {
    const val ENDPOINT_LOGIN = BuildConfig.BASE_URL + "/account/login"
    const val ENDPOINT_REGISTER = BuildConfig.BASE_URL + "/account/register"

    const val ENDPOINT_GET_FILMS_NOW_PLAYING = BuildConfig.BASE_URL + "/film/now-playing"
    const val ENDPOINT_GET_FILMS_BY_CATEGORY = BuildConfig.BASE_URL + "/film/category?q={q}"
    const val ENDPOINT_GET_FILM_BY_ID = BuildConfig.BASE_URL + "/film/{id}"
    const val ENDPOINT_GET_CITY = BuildConfig.BASE_URL + "/theater/city/list"
    const val ENDPOINT_GET_THEATER_BY_CITY_NAME = BuildConfig.BASE_URL + "/theater/search?cityName={cityName}"
    const val ENDPOINT_GET_SHOWTIME = BuildConfig.BASE_URL + "/showtime/search?idTheater={idTheater}&idFilm={idFilm}&date={date}"

}