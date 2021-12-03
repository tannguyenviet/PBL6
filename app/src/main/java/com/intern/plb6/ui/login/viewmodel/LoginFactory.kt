package com.intern.plb6.ui.login.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.intern.plb6.ui.login.view.LoginNavigator

class LoginFactory(
    private val navigator: LoginNavigator
) : ViewModelProvider.Factory {

    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(LoginViewModel::class.java)) {
            return LoginViewModel(navigator) as T
        }
        throw IllegalArgumentException("Unknown class name")
    }
}