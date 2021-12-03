package com.intern.plb6.ui.register

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider

class RegisterFactory(private val navigator: RegisterNavigator): ViewModelProvider.Factory {

    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(RegisterViewModel::class.java)) {
            return RegisterViewModel(navigator) as T
        }
        throw IllegalArgumentException("Unknown class name")
    }

}