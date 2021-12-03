package com.intern.plb6.data.remote

import com.intern.plb6.data.model.api.*
import io.reactivex.Single

interface ApiHelper {

    fun getFilms(): Single<List<Film>>?

    fun getFilmsByCategory(category: String): Single<List<Film>>?

    fun getFilm(id: String): Single<Film>?

    fun getUsers(): Single<FilmResponse>?

    fun doRegisterApiCall(registerRequest: RegisterRequest): Single<RegisterResponse>?

    fun doLoginApiCall(loginRequest: LoginRequest): Single<LoginResponse>?

    fun getCity(): Single<List<City>>?

    fun getTheaterByCity(cityName: String): Single<List<Theater>>?

    fun getShowTime(idTheater: String, idFilm: String, date: String): Single<List<ShowTimeResponse>>?
}