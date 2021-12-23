package com.intern.plb6.ui.home.viewmodel

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.model.api.Category
import com.intern.plb6.data.model.api.City
import com.intern.plb6.data.model.api.Film
import com.intern.plb6.data.model.api.Theater
import com.intern.plb6.extension.observeOnUiThread
import com.intern.plb6.ui.home.view.HomeNavigator
import com.intern.plb6.utils.Resource
import io.reactivex.disposables.CompositeDisposable

class HomeViewModel(private val navigator: HomeNavigator) : ViewModel() {

    private val categories = MutableLiveData<Resource<List<Category>>>()
    private val films = MutableLiveData<Resource<List<Film>>>()
    private val cities = MutableLiveData<Resource<List<City>>>()
    private val theaters = MutableLiveData<Resource<List<Theater>>>()

    private val compositeDisposable = CompositeDisposable()
    private var dataManager: AppDataManager? = AppDataManager.getInstance()

    init {
        fetchCategory()
        fetchFilm("")
        fetchCity()
    }

    private fun fetchCategory() {
        val categories = ArrayList<Category>()
        categories.add(Category("All", true))
        categories.add(Category("Thriller", false))
        categories.add(Category("Adventure", false))
        categories.add(Category("Fantasy", false))
        categories.add(Category("Comedy", false))
        categories.add(Category("Action", false))
        categories.add(Category("Family", false))
        categories.add(Category("Crime", false))
        this.categories.postValue(Resource.success(categories))
    }

    fun fetchFilm(category: String) {
        dataManager?.getFilmsByCategory(category)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    this.films.postValue(Resource.success(response))
                    Log.d("LoginViewModel", "Film")
                }) { throwable ->
                    Log.d("HomeViewModel", "Film" + throwable.message.toString())
                })
        }
    }

    private fun fetchCity() {
        dataManager?.getCity()?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    this.cities.postValue(Resource.success(response))
                    fetchTheater(response[0].city.toString())
                    Log.d("HomeViewModel", "City " + cities.value?.data?.get(0)?.city.toString())
                }) { throwable ->
                    Log.d("LoginViewModel", throwable.message.toString())
                })
        }
    }

    private fun fetchTheater(city: String) {
        dataManager?.getTheaterByCity(city)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    Log.d("HomeViewModel", "Theater: " + response.size)
                    this.theaters.postValue(Resource.success(response))
                }) { throwable ->
                    Log.d("HomeViewModel", "Theater: " + throwable.message.toString())
                })
        }
    }

    fun getCategory(): LiveData<Resource<List<Category>>> {
        return categories
    }

    fun getFilms(): LiveData<Resource<List<Film>>> {
        return films
    }

}