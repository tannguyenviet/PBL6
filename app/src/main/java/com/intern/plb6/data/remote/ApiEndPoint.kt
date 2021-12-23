package com.intern.plb6.data.remote

import com.intern.plb6.BuildConfig

object ApiEndPoint {
    var token = ""
    const val ENDPOINT_LOGIN = BuildConfig.BASE_URL + "/account/login"
    const val ENDPOINT_REGISTER = BuildConfig.BASE_URL + "/account/register"
    const val ENDPOINT_GET_FILMS_NOW_PLAYING = BuildConfig.BASE_URL + "/film/now-playing"
    const val ENDPOINT_GET_FILMS_BY_CATEGORY = BuildConfig.BASE_URL + "/film/category?q={q}"
    const val ENDPOINT_GET_FILM_BY_ID = BuildConfig.BASE_URL + "/film/{id}"
    const val ENDPOINT_GET_CITY = BuildConfig.BASE_URL + "/theater/city/list"
    const val ENDPOINT_GET_THEATER_BY_CITY_NAME = BuildConfig.BASE_URL + "/theater/search?cityName={cityName}"
    const val ENDPOINT_GET_SHOWTIME = BuildConfig.BASE_URL + "/showtime/search?idTheater={idTheater}&idFilm={idFilm}&date={date}"
    const val ENDPOINT_GET_SHOW_TIME_BY_ID = BuildConfig.BASE_URL + "/showtime/{id}"
    const val ENDPOINT_GET_LOCATION = BuildConfig.BASE_URL + "/ticket/location/list?idShowtime={id}"
    const val ENDPOINT_GET_PRICE_TYPE = BuildConfig.BASE_URL + "/pricetype/{id}"
    const val ENDPOINT_CREATE_PAYMENT = BuildConfig.BASE_URL + "/order/create_payment_url"
    const val ENDPOINT_GET_TICKET = BuildConfig.BASE_URL + "/ticket/account/{id}"
}