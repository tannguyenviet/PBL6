package com.intern.plb6.ui.reservation

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.model.api.PaymentRequest
import com.intern.plb6.data.model.api.PriceTypeResponse
import com.intern.plb6.data.model.api.ShowTimeResponse
import com.intern.plb6.data.model.other.Location
import com.intern.plb6.extension.observeOnUiThread
import com.intern.plb6.utils.Resource
import io.reactivex.disposables.CompositeDisposable

class ReservationViewModel(private var navigator: ReservationNavigator) : ViewModel() {

    private var dataManager: AppDataManager? = AppDataManager.getInstance()
    private val locations = MutableLiveData<Resource<List<Location>>>()
    private val showTime = MutableLiveData<Resource<ShowTimeResponse>>()
    private val priceType = MutableLiveData<Resource<PriceTypeResponse>>()
    private val compositeDisposable = CompositeDisposable()

    private fun fakeLocation() : List<Location> {
        val locationList = ArrayList<Location>()

        locationList.add(Location("A1", false, false))
        locationList.add(Location("A3", false, false))
        locationList.add(Location("A4", false, false))
        locationList.add(Location("A5", false, false))
        locationList.add(Location("A6", false, false))
        locationList.add(Location("A7", false, false))
        locationList.add(Location("A8", false, false))
        locationList.add(Location("A9", false, false))
        locationList.add(Location("B1", false, false))
        locationList.add(Location("B3", false, false))
        locationList.add(Location("B4", false, false))
        locationList.add(Location("B5", false, false))
        locationList.add(Location("B6", false, false))
        locationList.add(Location("B7", false, false))
        locationList.add(Location("B8", false, false))
        locationList.add(Location("B9", false, false))
        locationList.add(Location("C1", false, false))
        locationList.add(Location("C3", false, false))
        locationList.add(Location("C4", false, false))
        locationList.add(Location("C5", false, false))
        locationList.add(Location("C6", false, false))
        locationList.add(Location("C7", false, false))
        locationList.add(Location("C8", false, false))
        locationList.add(Location("C9", false, false))
        locationList.add(Location("D1", false, false))
        locationList.add(Location("D3", false, false))
        locationList.add(Location("D4", false, false))
        locationList.add(Location("D5", false, false))
        locationList.add(Location("D6", false, false))
        locationList.add(Location("D7", false, false))
        locationList.add(Location("D8", false, false))
        locationList.add(Location("D9", false, false))
        locationList.add(Location("E1", false, false))
        locationList.add(Location("E3", false, false))
        locationList.add(Location("E4", false, false))
        locationList.add(Location("E5", false, false))
        locationList.add(Location("E6", false, false))
        locationList.add(Location("E7", false, false))
        locationList.add(Location("E8", false, false))
        locationList.add(Location("E9", false, false))
        locationList.add(Location("F1", false, false))
        locationList.add(Location("F3", false, false))
        locationList.add(Location("F4", false, false))
        locationList.add(Location("F5", false, false))
        locationList.add(Location("F6", false, false))
        locationList.add(Location("F7", false, false))
        locationList.add(Location("F8", false, false))
        locationList.add(Location("F9", false, false))
        locationList.add(Location("G1", false, false))
        locationList.add(Location("G3", false, false))
        locationList.add(Location("G4", false, false))
        locationList.add(Location("G5", false, false))
        locationList.add(Location("G6", false, false))
        locationList.add(Location("G7", false, false))
        locationList.add(Location("G8", false, false))
        locationList.add(Location("G9", false, false))
        locationList.add(Location("H1", false, false))
        locationList.add(Location("H3", false, false))
        locationList.add(Location("H4", false, false))
        locationList.add(Location("H5", false, false))
        locationList.add(Location("H6", false, false))
        locationList.add(Location("H7", false, false))
        locationList.add(Location("H8", false, false))
        locationList.add(Location("H9", false, false))

        return locationList
    }

    fun fetchShowTime(idShowTime: String) {
        dataManager?.getShowTimeById(idShowTime)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    showTime.postValue(Resource.success(response))
                    fetchPriceType(response.priceTypeId.toString())
                    Log.d("ReservationViewModel", "success")
                }) { throwable ->
                    Log.d("ReservationViewModel", "User with username or email already exists!")
                })
        }
    }

    fun fetchPriceType(idType: String) {
        dataManager?.getPriceType(idType)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    priceType.postValue(Resource.success(response))
                    Log.d("ReservationViewModel", "success")
                }) { throwable ->
                    Log.d("ReservationViewModel", "User with username or email already exists!")
                })
        }
    }

    fun fetchLocation(idShowTime: String) {
        dataManager?.getLocation(idShowTime)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    val locationList = fakeLocation()
                    for (i in response) {
                        for (location in locationList) {
                            if (location.location == i) {
                                location.booking = true
                                break
                            }
                        }
                    }
                    locations.postValue(Resource.success(locationList))
                }) { throwable ->
                    Log.d("ReservationViewModel", "User with username or email already exists!")
                })
        }
    }

    fun payment(request: PaymentRequest) {
        dataManager?.createPayment(request)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    navigator.openPaymentActivity(response)
                }) { throwable ->
                    Log.d("ReservationViewModel", "User with username or email already exists!")
                })
        }
    }

    fun getLocations(): LiveData<Resource<List<Location>>> {
        return locations
    }

    fun getShowTime(): LiveData<Resource<ShowTimeResponse>> {
        return showTime
    }

    fun getPriceType(): LiveData<Resource<PriceTypeResponse>> {
        return priceType
    }

}