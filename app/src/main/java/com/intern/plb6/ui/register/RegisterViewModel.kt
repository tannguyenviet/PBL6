package com.intern.plb6.ui.register

import android.util.Log
import androidx.lifecycle.ViewModel
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.model.api.RegisterRequest
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.schedulers.Schedulers

class RegisterViewModel(private var navigator: RegisterNavigator): ViewModel() {

    private var dataManager: AppDataManager? = AppDataManager.getInstance()
    private val compositeDisposable = CompositeDisposable()

    fun login() {
        navigator.openLoginActivity()
    }

    fun register(registerRequest: RegisterRequest) {
        navigator.loading()
        dataManager?.doRegisterApiCall(registerRequest)
            ?.subscribeOn(Schedulers.io())
            ?.observeOn(AndroidSchedulers.mainThread())?.let {
                compositeDisposable.add(
                    it
                        .subscribe({ response ->
                            navigator.dismissDialog()
                            navigator.showMess(response.message.toString())
                            navigator.openLoginActivity()
                            Log.d("RegisterViewModel", "success")
                        }) { throwable ->
                            navigator.dismissDialog()
                            navigator.showMess("User with username or email already exists!")
                            Log.d("RegisterViewModel", "User with username or email already exists!")
                        })
            }
    }

}