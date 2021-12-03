package com.intern.plb6.ui.detailfilm

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.model.api.Film
import com.intern.plb6.data.model.api.ShowTime
import com.intern.plb6.data.model.mapping.CityMapping
import com.intern.plb6.data.model.mapping.ShowTimeMapping
import com.intern.plb6.data.model.mapping.TheaterMapping
import com.intern.plb6.extension.observeOnUiThread
import com.intern.plb6.utils.Resource
import io.reactivex.disposables.CompositeDisposable

class DetailViewModel(private var navigator: DetailNavigator) : ViewModel() {

    private val showTimes = MutableLiveData<Resource<List<ShowTimeMapping>>>()
    private val film = MutableLiveData<Resource<Film>>()
    private var cities = MutableLiveData<Resource<List<CityMapping>>>()
    private var theaters = MutableLiveData<Resource<List<TheaterMapping>>>()

    private val compositeDisposable = CompositeDisposable()
    private var dataManager: AppDataManager? = AppDataManager.getInstance()

    init {
        fetchCities()
    }

    fun fetchShowtime(idTheater: String, idFilm: String, date: String) {
        dataManager?.getShowTime(idTheater, idFilm, date)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    val showTimeMap = ShowTimeMapping.mapListShowTime(response)
                    showTimes.value = Resource.success(showTimeMap)
                    showTimes.postValue(Resource.success(showTimeMap))
                }) { throwable ->
                    showTimes.postValue(Resource.error("no data", null))
                    Log.d("DetailViewModel", "ShowTime " + throwable.message.toString())
                }
            )
        }
    }

    fun fetchFilm(id: String) {
        navigator.loading()
        dataManager?.getFilm(id)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    this.film.value = Resource.success(response)
                    this.film.postValue(Resource.success(response))
                    navigator.dismissDialog()
                }) { throwable ->
                    navigator.dismissDialog()
                    Log.d("DetailViewModel", "Film " + throwable.message.toString())
                })
        }
    }

    private fun fetchCities() {
        dataManager?.getCity()?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    val cityMapping = CityMapping.mapListCity(response)
                    cities.value = Resource.success(cityMapping)
                    cities.postValue(Resource.success(cityMapping))
                    if (response.isNotEmpty()) {
                        fetchTheaters(response[0].city.toString())
                    }
                }) { throwable ->
                    Log.d("DetailViewModel", "City " + throwable.message.toString())
                }
            )
        }
    }

    fun fetchTheaters(city: String) {
        dataManager?.getTheaterByCity(city)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    val theatersMapping = TheaterMapping.mapListTheater(response)
                    theaters.value = Resource.success(theatersMapping)
                    theaters.postValue(Resource.success(theatersMapping))
                }) { throwable ->
                    Log.d("DetailViewModel", "Theater " + throwable.message.toString())
                }
            )
        }
    }

    fun getShowTimes(): LiveData<Resource<List<ShowTimeMapping>>> {
        return showTimes
    }

    fun getFilms(): LiveData<Resource<Film>> {
        return film
    }

    fun getCities(): LiveData<Resource<List<CityMapping>>> {
        return cities
    }

    fun getTheaters(): LiveData<Resource<List<TheaterMapping>>> {
        return theaters
    }
}