package com.intern.plb6.data.remote

import com.intern.plb6.data.model.api.*
import com.rx2androidnetworking.Rx2AndroidNetworking
import io.reactivex.Single

class AppApiHelper : ApiHelper {

    companion object {
        private var mInstance: AppApiHelper? = null

        fun getInstance(): AppApiHelper? {
            if (mInstance == null) {
                mInstance = AppApiHelper()
            }
            return mInstance
        }
    }

    override fun getFilms(): Single<List<Film>>? =
        Rx2AndroidNetworking.get(ApiEndPoint.ENDPOINT_GET_FILMS_NOW_PLAYING).build()
            .getObjectListSingle(Film::class.java)

    override fun getFilmsByCategory(category: String): Single<List<Film>>? =
        Rx2AndroidNetworking.get(ApiEndPoint.ENDPOINT_GET_FILMS_BY_CATEGORY)
            .addPathParameter("q", category)
            .build()
            .getObjectListSingle(Film::class.java)

    override fun getFilm(id: String): Single<Film>? =
        Rx2AndroidNetworking.get(ApiEndPoint.ENDPOINT_GET_FILM_BY_ID)
            .addPathParameter("id", id)
            .build()
            .getObjectSingle(Film::class.java)

    override fun getUsers(): Single<FilmResponse>? {
        return Rx2AndroidNetworking.get("http://192.168.1.49:8080/film/list")
            .build()
            .getObjectSingle(FilmResponse::class.java)
    }

    override fun doRegisterApiCall(registerRequest: RegisterRequest): Single<RegisterResponse> =
        Rx2AndroidNetworking.post(ApiEndPoint.ENDPOINT_REGISTER)
            .addBodyParameter(registerRequest)
            .build()
            .getObjectSingle(RegisterResponse::class.java)

    override fun doLoginApiCall(loginRequest: LoginRequest): Single<LoginResponse> =
        Rx2AndroidNetworking.post(ApiEndPoint.ENDPOINT_LOGIN)
            .addBodyParameter(loginRequest)
            .build()
            .getObjectSingle(LoginResponse::class.java)

    override fun getCity(): Single<List<City>>? =
        Rx2AndroidNetworking.get(ApiEndPoint.ENDPOINT_GET_CITY)
            .build()
            .getObjectListSingle(City::class.java)

    override fun getTheaterByCity(cityName: String): Single<List<Theater>>? =
        Rx2AndroidNetworking.get(ApiEndPoint.ENDPOINT_GET_THEATER_BY_CITY_NAME)
            .addPathParameter("cityName", cityName)
            .build()
            .getObjectListSingle(Theater::class.java)

    override fun getShowTime(idTheater: String, idFilm: String, date: String): Single<List<ShowTimeResponse>>? =
        Rx2AndroidNetworking.get(ApiEndPoint.ENDPOINT_GET_SHOWTIME)
            .addPathParameter("idTheater", idTheater)
            .addPathParameter("idFilm", idFilm)
            .addPathParameter("date", date)
            .build()
            .getObjectListSingle(ShowTimeResponse::class.java)
}