package com.intern.plb6.ui.history

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.model.api.TicketResponse
import com.intern.plb6.extension.observeOnUiThread
import com.intern.plb6.utils.DateTimeUtils
import com.intern.plb6.utils.Resource
import com.intern.plb6.utils.SortUtils.sortTicket
import io.reactivex.disposables.CompositeDisposable

class HistoryViewModel : ViewModel(){

    private val compositeDisposable = CompositeDisposable()
    private var dataManager: AppDataManager? = AppDataManager.getInstance()
    private val tickets = MutableLiveData<Resource<List<TicketResponse>>>()

    fun fetchTicket(idAccount: String) {
        dataManager?.getTicket(idAccount)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    var list = ArrayList<TicketResponse>()
                    list.addAll(response)
                    list = sortTicket(list)
                    tickets.postValue(Resource.success(list))
                    Log.d("PaymentViewModel", "success")
                }) { throwable ->
                    Log.d("PaymentViewModel", throwable.toString())
                })
        }
    }

    fun getTickets(): LiveData<Resource<List<TicketResponse>>> {
        return tickets
    }

}