package com.intern.plb6.ui.login.viewmodel

import android.content.SharedPreferences
import android.util.Log
import androidx.lifecycle.ViewModel
import com.bumptech.glide.load.HttpException
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
//        LoginRequest("member_1","111")
        navigator.loading()
        dataManager?.doLoginApiCall(request)
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
                            if (throwable is HttpException) {
                                Log.d("LoginViewModel", throwable.message.toString())
                            }
                            navigator.showMessage("UserName or PassWord is not Correct!!!")
                            navigator.dismissDialog()
                        })
            }
    }

    override fun onCleared() {
        compositeDisposable.dispose()
        super.onCleared()
    }

}