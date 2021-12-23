package com.intern.plb6.ui.ticket

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.model.api.TicketResponse
import com.intern.plb6.extension.observeOnUiThread
import com.intern.plb6.utils.Resource
import io.reactivex.disposables.CompositeDisposable

class TicketViewModel : ViewModel(){

    private val compositeDisposable = CompositeDisposable()
    private var dataManager: AppDataManager? = AppDataManager.getInstance()
    private val tickets = MutableLiveData<Resource<List<TicketResponse>>>()

    fun fetchTicket(idAccount: String) {
        dataManager?.getTicket(idAccount)?.observeOnUiThread()?.let {
            compositeDisposable.add(
                it.subscribe({ response ->
                    tickets.postValue(Resource.success(response))
                    Log.d("PaymentViewModel", "success")
                }) { throwable ->
                    Log.d("PaymentViewModel", throwable.toString())
                })
        }
    }

    fun setTicket(ticket: TicketResponse) {
        var list = ArrayList<TicketResponse>()
        list.add(ticket)
        tickets.postValue(Resource.success(list))
    }

    fun getTickets(): LiveData<Resource<List<TicketResponse>>> {
        return tickets
    }

}