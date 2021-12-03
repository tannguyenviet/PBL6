package com.intern.plb6.ui.login.viewmodel

import android.util.Log
import androidx.lifecycle.ViewModel
import com.intern.plb6.data.AppDataManager
import com.intern.plb6.data.model.api.LoginRequest
import com.intern.plb6.ui.login.view.LoginNavigator
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.schedulers.Schedulers

class LoginViewModel(
    private val navigator: LoginNavigator
) : ViewModel() {

    private val compositeDisposable = CompositeDisposable()
    private var dataManager: AppDataManager? = AppDataManager.getInstance()

    fun login(request: LoginRequest) {
        navigator.loading()
        dataManager?.doLoginApiCall(LoginRequest("manager_1","111"))
            ?.subscribeOn(Schedulers.io())
            ?.observeOn(AndroidSchedulers.mainThread())?.let {
                compositeDisposable.add(
                    it
                        .subscribe({ response ->
                            dataManager?.updateUserInfo(
                                response.token,
                                response.info?.id,
                                response.info?.username,
                                response.info?.email,
                                ""
                            )
                            navigator.openHomeActivity()
                            navigator.dismissDialog()
                        }) { throwable ->
                            navigator.showMessage("UserName or PassWord is not Correct!!!")
                            navigator.dismissDialog()
                            Log.d("LoginViewModel", throwable.message.toString())
                        })
            }
    }

    override fun onCleared() {
        compositeDisposable.dispose()
        super.onCleared()
    }

}